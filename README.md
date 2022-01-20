# BasicCrudApp

Basic crud app using Spring for backend API and Angular for frontend App.

## Content in this Repository

- backend-app
- frontend-app
- db

## Backend API with Spring Framework

This API was develop using IDE Netbeans 12.6 and Java 11. 

Default port is 8080, so url to make request in local is http://localhost:8080/

The following paths was created to manage request for next entities:

Entity | url
-|-
Distributor | http://localhost:8080/api/distributor/
Product | http://localhost:8080/api/product/
Channel | http://localhost:8080/api/channel/
|

Each entity url has capacity to manage all CRUD operations, based on REST indications. 

## Frontend App with Angular

This App was develop using Angular and Bootstrap.

Default port is 4200 so url to access in local is http://localhost:4200/

In the app all crud operations was used to manage all data. 

## Database with MariaDB

Database used in this proyect was MariaDB. The schemma of database is in the folder. 

## Comments

This proyect has only one mode: to be able to manage front-end app, you need to prepare first all backend part. 