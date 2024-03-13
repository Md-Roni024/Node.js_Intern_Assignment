### This basic CRUD Project backend deploy using Node.js,Express.js & MongDB.
Following Task are complete in this project.
- Task-1
    - Build API where admin can create employee with (Firstname,Lastname,Email,Phone number) as admin an keep record in database.
        ```
        Http method: POST
        endpoint   :http://localhost:3000/employee
        ```
- Task-2
    - Get all employee list from Database
        ```
        Http method: GET
        endpoint   :http://localhost:3000/employee
        ```
- Task-3
    - Read individual employee details based on given ID.
        ```
        Http method: GET
        endpoint   :http://localhost:3000/employee/:id
        ```
- Task-4
    - Update individual employee details based on given ID.
        ```
        Http method: PUT
        endpoint   :http://localhost:3000/employee/:id
        ```
- Task-5
    - Block and unblock user. Keep a boolean value in database. 
        ```
        Http method: PUT
        endpoint   :http://localhost:3000/employee/block/:id
        ```
- Task-6
    - Delete user by ID. 
        ```
        Http method: DELETE
        endpoint   :http://localhost:3000/employee/:id
        ```

## How to Run this Project
Run at Server PORT = 3000
```node.js
#Run Following Commad 
npm install
npm start
```