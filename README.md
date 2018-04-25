# Node-js-
/*CRUDdy Routes is used normally to build 4 routes, however in this task, we have used only to CREATE a conversion, 
to READ your conversion using 'id'. Node js together with express framework, mongodb, body-parser, and nodemon are 
used to develop the conversion application. To test the API the application Postman is used as a client side making
requests. The Postman is used to send simple HTTP requests with custom bodies and parameters. So please install 
postman to this application.*/

#Please follow the following instruction to test the appllication:

1)First go to .../t_academic> and run the command (Please see "installing_libraries_database_parser.jpg"):
    npm install --save express mongodb body-parser
2)Then in the same folder run the following command (Please see "nodemon_auto_refresh.jpg"):
    npm install --save nodemon
3) In the same folder start your server on localhost using the command below (Please see "making_a_request_read_id.jpg"):
    node server.js
4)Please download and install Postman from the site 'https://www.getpostman.com/' and use it to send simple HTTP
 requests with custom bodies and parameters.

#Consider the inside of Postman as a REST API type to be used in the following manner 

#Sending a JSON type request. Please see "making_a_request_creating.jpg".)
# create 
post 'http://localhost:8000/conversion'
{
    title:Roman to Decimal,
    body:x
}
end

#N:B The following are already created values that are to be accessed from the mongodb. Please see "making_a_request_read_id.jpg"
# read 
get 'http://localhost:8000/conversion/:id'
end
