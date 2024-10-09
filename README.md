# API Chaining Dashboard

## Overview
The API Chaining Dashboard is a responsive web application that demonstrates the ability to handle API interactions using React.js and Tailwind CSS. The app allows users to chain multiple API calls together, where the first API response’s fields can be used as parameters for subsequent API requests.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Approach](#approach)
- [Assumptions & Decisions](#assumptions--decisions)
- [Completed Features](#completed-features)
- [Known Issues](#known-issues)

## Project Structure
api-chaining-dashboard/ │ ├── public/ │ ├── index.html # Main HTML file │ └── favicon.ico # App favicon │ ├── src/ │ ├── components/ # React components for UI │ │ ├── ApiForm.js # Form for API chaining │ │ ├── ApiResponse.js # Component to display API responses │ │ └── Header.js # Header component │ │ │ ├── App.js # Main application component │ ├── index.js # Entry point for React application │ ├── App.css # Styles specific to App │ └── index.css # Global styles using Tailwind CSS │ ├── package.json # Project metadata and dependencies └── README.md # Project documentation


## Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Steps to Run the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deadpool4466/api-chaining-dashboard.git
   cd api-chaining-dashboard

  ## Approach
The application implements API chaining by:

Fetching a list of users with a GET request from https://jsonplaceholder.typicode.com/users.
Using the selected user's userId to create a new post with a POST request to https://jsonplaceholder.typicode.com/posts.
Fetching comments for the newly created post using the postId with another GET request to https://jsonplaceholder.typicode.com/comments?postId={postId}.
The UI is built with React functional components and styled using Tailwind CSS for a modern and responsive design.

State management is handled using the useState hook, and API requests are managed with axios.

## Assumptions & Decisions
User Selection: The user must select a user from the list before creating a post.
Static API Endpoints: The application uses hardcoded API endpoints for demonstration.
Linear API Flow: The app assumes a specific order of API calls: Users -> Posts -> Comments.
## Completed Features
API Chaining: Successfully implements chained API calls where data from one response is used in the next request.
GET and POST Requests: Handles both types of requests effectively.
Responsive Design: The layout is fully responsive and adapts to different screen sizes.
Error Handling: Basic error handling is in place to manage failed API requests.
## Known Issues
Limited Error Handling: More detailed error feedback could be provided.
Hardcoded API URLs: The application does not currently support dynamic API URLs.
Fixed API Sequence: The app only supports a predefined sequence of API calls; more complex flows could be added in the future.
