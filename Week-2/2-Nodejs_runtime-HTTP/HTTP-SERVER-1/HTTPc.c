#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

#define PORT 8080
#define BUFFER_SIZE 1024

void handle_client(int client_socket) {
    char buffer[BUFFER_SIZE];
    int read_size;

    // Read the client's request
    read_size = read(client_socket, buffer, BUFFER_SIZE - 1);
    if (read_size < 0) {
        perror("Error reading from socket");
        return;
    }

    // Null-terminate the received data
    buffer[read_size] = '\0';

    // Print the received request (for debugging purposes)
    printf("Received request:\n%s\n", buffer);

    // Create a simple HTTP response
    const char *response = 
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: text/html\r\n"
        "Content-Length: 38\r\n"
        "\r\n"
        "<html><body><h1>Hello, World!</h1></body></html>";

    // Send the response to the client
    write(client_socket, response, strlen(response));

    // Close the client socket
    close(client_socket);
}

int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len = sizeof(client_addr);

    // Create the server socket
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket < 0) {
        perror("Error creating socket");
        exit(EXIT_FAILURE);
    }

    // Configure the server address structure
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    // Bind the socket to the specified IP address and port
    if (bind(server_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        perror("Error binding socket");
        close(server_socket);
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(server_socket, 5) < 0) {
        perror("Error listening on socket");
        close(server_socket);
        exit(EXIT_FAILURE);
    }

    printf("Server is running on port %d\n", PORT);

    // Main loop to accept and handle incoming connections
    while (1) {
        // Accept a new connection
        client_socket = accept(server_socket, (struct sockaddr *)&client_addr, &client_len);
        if (client_socket < 0) {
            perror("Error accepting connection");
            close(server_socket);
            exit(EXIT_FAILURE);
        }

        // Handle the client's request
        handle_client(client_socket);
    }

    // Close the server socket
    close(server_socket);
    return 0;
}
