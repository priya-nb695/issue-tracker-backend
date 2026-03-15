# Issue Tracker Backend API

Backend API for the Issue Tracker application.
This service provides REST APIs to create, manage, and track development issues.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

## Features

* Create new issues
* Fetch all issues
* Update issue details or status
* Delete issues
* RESTful API architecture

## Project Structure

```
issue-tracker-backend
│
├── models
│   └── Issue.js
│
├── routes
│   └── issues.js
│
├── server.js
├── package.json
└── .gitignore
```

## Installation

### Clone repository

```
git clone https://github.com/yourusername/issue-tracker-backend.git
cd issue-tracker-backend
```

### Install dependencies

```
npm install
```

### Setup environment variables

Create a `.env` file in the root directory.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run the server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | /issues     | Get all issues   |
| POST   | /issues     | Create new issue |
| PUT    | /issues/:id | Update issue     |
| DELETE | /issues/:id | Delete issue     |

## Future Improvements

* Authentication (JWT)
* User roles
* Assign issues to developers
* Pagination and filtering
