# A Simple Tasks App

Just as the name suggests its just a task app

## Description

A very very simple application to store your tasks. Create new tasks and remove tasks. All tasks are stored in a DB to persist data between logins

## Getting Started

### Dependencies

* Node.js
* NPM package manager
* VSCode or similar code editor

### Installing

* Navigate to this project on your pc and in the terminal enter ```npm install```
* Then navigate to client directory ```cd client``` and input ```npm install```
* Once installation is completed ```cd ..```
* .env file includes my Mongo cloud string, you can use you own by editing the MONGO_URI line in the .env file

### Executing program

* In the root of the project, input ```npm run dev``` which will start the server and React

## Using this app

### Overview

* On the homepage you can go directly to your dashboard it will log you in automatically if you have not logged out from your previos session
* If you have previosly logged out and are still registered as a user you can navigate to the login screen
* You can navigate to the register screen from the login screen
* If you try to goto the taskDashboard from the url depending on you login status you will be redirected to the login screen or your tasks will be presented to you

### Tasks

* To create a task, input text in the box and press Enter or click the add button
* To remove a task click on the tick mark to remove the task from the list

### Dashboard

* From the task dashboard you can goto the homescreen or log out of the application
* the cookie is sent on every request to the server, if for any reason the cookie is not sent the user is sent to the login screen

### Notes

* Cookie is set to only be sent on requests to ```/api/tasks``` it will not be sent to any other routes
* A test username/email ```joe@soap.com``` and password ```js``` have been setup and example tasks added
* There is no validation of name, surname, email or password when registering for ease of testing
* The ```.env``` file contains my personal connection to MongoDB cloud and JWT secret if you wish to test

## Help

* Report any problems to me via email on fredwil25@gmail.com
