# Introduction to Back-End Server Application Development using JEE

## Base Project
This project contains the base application for our labs. It consists of two parts: 

1. A **client app** built using Angular
2. A mock of a **REST API** that exposes some HTTP resources that can be used by the client application

During this course you will use the **client app** and build your own **API** 

## Prerequisites
* You must have an IDE to work with this project. We recommend using the IntelliJ IDEA Community Edition. This IDE has good integration with Maven and JUnit. [Download IntelliJ](https://www.jetbrains.com/idea/download/#section=mac)
* You must have Node.js installed in your machine. You can use [this site](https://nodejs.org/en/download/) to install the latest Node.js. If you are already familiar with a package management (e.g. brew, Yum, apt-get), feel free to use your preferred tool.

## Installation 

* Download or clone (`git clone`) this project
* Open the project using your IDE

## Execution

### Starting the mock REST API

* go to the folder `src/main/ngapp`, where the application is installed
* Start the server using the command `node mock-server.js`. This command will start a Node.js server at port 3000. 
* To check if the mock server is working properly, access the following address:
	* [http://localhost:3000/api/customers/1](http://localhost:3000/api/customers/1)
	* The server must return a JSON representation of the customer with id equals to 1.

### Starting the Client App

The client application makes use of a REST API to manipulate data. By default the application will use the mock server at port 3000. To start the app, type the following command:

`mvn jetty:run`

A server running on port 8090 will start.

Now you can access the client app through the link below:

[http://localhost:8090/](http://localhost:8090/)

#### Starting the Client App that uses your own REST API

During the lab sessions, you will build your own REST API. To run the application pointing to your own implemenation run the command with the `-Pprod` parameter, that will activate a different profile. This is the complete command:

`mvn jetty:run -Pprod`







