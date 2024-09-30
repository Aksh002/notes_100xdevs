import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleHttpServer {
    public static void main(String[] args) throws IOException {
        // Create an HTTP server on port 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        
        // Define a context for the root path
        server.createContext("/", new RootHandler());
        
        // Start the server
        server.setExecutor(null); // creates a default executor
        server.start();
        
        System.out.println("Server is running on port 8080");
    }

    // Define a handler for the root context
    static class RootHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // Define the response content
            String response = "<html><body><h1>Hello, World!</h1></body></html>";
            
            // Set the response headers
            exchange.getResponseHeaders().set("Content-Type", "text/html");
            
            // Send the response code and the length of the response content
            exchange.sendResponseHeaders(200, response.length());
            
            // Write the response content to the output stream
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}


// USING SPRING BOOT 

// src/main/java/com/example/demo/DemoApplication.java

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

// src/main/java/com/example/demo/HelloController.java

package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, World!";
    }
}

// "./mvnw spring-boot:run" in terminal to run