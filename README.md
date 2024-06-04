# E-Commerce Backend

## Description

The following application is an E-Commerce site that uses a built Express Api, as well as Sequelize, to interact with the Postgres Database. Given starter code, I was tasked with an ORM challenge, which was to build the back-end of a website that already had a functional Express Api. The website includes category, product, and tag models/routes. Allowing the user to perform any of the 'CRUD' operations to edit the database. The code also includes a schema file to create the databse, and a seeds folder to help populate it. 

## Installation

In order to get started. You'll first want to run an 'npm I' to get the dependencies for the Postgres, Sequelize, and Dotenv packages. Next, be sure to add your own .env file with fields for DB Name, User, and Password. After that, you'll be ready to create the DB using '\i schema.sql' in the postgres shell, and using 'npm run seed' if you'd like to populate the DB. Finally, after running an 'npm start' in the server.js terminal, you'll be ready to use the application.
* The following image is a clickable link taking you to a YouTube video, which will showcase the initialization, as well as functionality of the Application :
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ScALTD5EWwo/0.jpg)](https://www.youtube.com/watch?v=ScALTD5EWwo)
  
## Usage

If you'd like to use the website and test it's functionality, you can try testing it within Insomnia. There you'll be able to perform CRUD operations on the data, such as Get, Put, Post, and Delete. In order to do this. You'll have to search for localhost:3001/api. From there, you'll also want to add the endpoint you'd like to test in the url. For example - localhost:3001/api/categories. You can also add a /:id to the url if you'd like to manage or view a specific thing. 
* The Following image is an example of what testing in insomnia may look like :
![for project](https://github.com/Rinovi/E-Commerce/assets/160938078/49dac5bb-cb59-4bc1-951a-2818b9c50d5f)

## Credits

Link to starter code, which was made to create this project : https://github.com/coding-boot-camp/bookish-sniffle
