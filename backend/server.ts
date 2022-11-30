// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import controller from "./Routes/controller"
import config from "./Utils/config";
import mysql_create_table from "./Utils/mySql_init";


// create server using express
const server = express();

// creating tables inside mysql if not exists
mysql_create_table()

// cross origin platforms
server.use(cors());

// every data transfer is a json data
server.use(express.json());

// calling ROUTES 
server.use("/something", controller)

// calling errors handler 
server.use("*", ErrorHandler);

//TODO: catch all errors file 

// uploading the server with matching port 
const currentPort = config.port;
server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )