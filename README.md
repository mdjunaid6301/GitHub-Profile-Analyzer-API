# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, MySQL, and the GitHub Public API. The application analyzes GitHub user profiles by fetching public profile data from GitHub and storing useful insights in a MySQL database.

## Features

* Fetch GitHub profile data using a username
* Store profile insights in MySQL
* Retrieve all analyzed profiles
* Retrieve a specific analyzed profile
* RESTful API architecture
* Error handling for invalid usernames and API failures

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* dotenv

## Project Structure

```text
github_profile_analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── profileController.js
│
├── routes/
│   └── profileRoutes.js
│
├── services/
│   └── githubService.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/mdjunaid6301/GitHub-Profile-Analyzer-API.git

cd GitHub-Profile-Analyzer-API
```

### Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
PORT=3000
```

## Database Setup

Create Database:

```sql
CREATE DATABASE github_analyzer;
```

Use Database:

```sql
USE github_analyzer;
```

Create Table:

```sql
CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    public_gists INT,
    profile_url VARCHAR(255),
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

Server will run on:

```text
http://localhost:3000
```

## API Endpoints

### Analyze GitHub Profile

**POST**

```http
/api/analyze
```

Request Body:

```json
{
  "username": "octocat"
}
```

### Get All Profiles

**GET**

```http
/api/profiles
```

### Get Single Profile

**GET**

```http
/api/profiles/:username
```

Example:

```http
/api/profiles/octocat
```

## Sample Response

```json
{
  "id": 1,
  "username": "octocat",
  "name": "The Octocat",
  "followers": 1000,
  "following": 10,
  "public_repos": 8,
  "public_gists": 2,
  "profile_url": "https://github.com/octocat"
}
```

## Future Improvements

* Repository analysis
* Total stars calculation
* Total forks calculation
* Most starred repository
* Top programming languages analysis
* Deployment with cloud database

## Author

Mohammad Junaid
