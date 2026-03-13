# Task Manager REST API

This project is a scalable backend REST API built using Node.js, Express.js, and MySQL.  
It provides authentication using JWT and allows users to perform CRUD operations on tasks.

## Features
- User Registration
- User Login with JWT Authentication
- Protected Routes using Middleware
- Create, Read, Update, and Delete Tasks
- MySQL Database Integration
- RESTful API Architecture

## Tech Stack
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt (Password Hashing)

## API Endpoints

### Authentication
POST /api/register → Register a new user  
POST /api/login → Login user and generate JWT token

### Tasks
POST /api/tasks/create → Create new task  
GET /api/tasks → Get all tasks  
PUT /api/tasks/update/:id → Update task  
DELETE /api/tasks/delete/:id → Delete task

## Database
Tables used:
- users
- tasks

## Author
Harshit Pandey
