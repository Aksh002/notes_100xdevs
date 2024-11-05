//													Serverless BE on cloudflare

// Check NOTES for detailed theory
// Write an HTTP server logic only, without bootstrapping it thorugh app.listen, as that is taken care by cloudflare
// Way of writting a BE server is very similar how one writes using "http library"

export default {
	async fetch(request, env, ctx): Promise<Response> {				// Return type of this fxn is "Promise <Response>" because the fxn itself is async, it will first fech smthing from the BE then return a promise which returns a response.
		console.log(request.body)
		console.log(request.headers)
		console.log(request.method)

		var uri = request.url.replace(/^https:\/\/.*?\//gi,"/");

		if (request.method==="GET"){
			if (uri==="/user"){
				// Handle user routes
			}
			return Response.json({
				msg:"you sent a get request"
			})
		}else{
			return Response.json({
				msg:"you did not sent a get request"
			})
		}
		
	},
} satisfies ExportedHandler<Env>;
