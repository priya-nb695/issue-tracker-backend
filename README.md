# Developer Issue Tracker

A full-stack issue tracking application for managing development tasks and bugs.
Users can create, view, update, and delete issues to track project work efficiently.

## Tech Stack

**Frontend**

* React

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

## Features

* Create new development issues
* View all issues
* Update issue status (Open / In Progress / Done)
* Delete issues
* RESTful API for issue management

## Project Structure

```
issue-tracker
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── components
    └── App.js
```

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
```

### 2. Install backend dependencies

```
cd backend
npm install
```

### 3. Create environment file

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the backend server

```
npm run dev
```

Server runs at:

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | /issues     | Get all issues     |
| POST   | /issues     | Create a new issue |
| PUT    | /issues/:id | Update issue       |
| DELETE | /issues/:id | Delete issue       |

## Future Improvements

* User authentication
* Assign issues to developers
* Priority filtering
* Dashboard analytics

## Author

Built as a learning project to practice full-stack development with React, Node.js, and MongoDB.
