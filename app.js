
var http = require('http');

//Lets define a port we want to listen to
var PORT=(process.env.VCAP_APP_PORT || 8080); 

//We need a function which handles requests and send response
function handleRequest(request, response){
	
    response.writeHead(200,{"Content-Type":"text/html"});
    /*response.write("<html><head><title>Mysite</title></head><body>");
    response.write("yay!!</body></html>");*/
    var options = {host:'manthanjamdagni.com',path:'/'};
    var stuff = "";
    http.get(options, function(res){
    	res.on('data',function(chunk){
    		stuff+=chunk;
    	});
    	res.on('end',function(){
    		 response.write(stuff);
    		 response.end(); 
    	});
    	
    });
   
	
    
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on port: "+PORT);
});