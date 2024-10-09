API Chaining Dashboard
Overview
This is a responsive web application built using React.js and Tailwind CSS that demonstrates API chaining functionality. The app allows the user to fetch data from multiple APIs (both GET and POST requests) and chains the responses from one API to be used as parameters for subsequent API calls. It is a demonstration of API handling, state management, data transformation, and error handling.

Table of Contents
Setup Instructions
Approach
Assumptions & Decisions
Completed Features
Known Issues
Setup Instructions
Prerequisites
Node.js (v14 or higher)
NPM (v6 or higher)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/api-chaining-dashboard.git
cd api-chaining-dashboard
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the app in your browser: Navigate to http://localhost:3000 to see the application in action.

Approach
API Chaining Logic
The app demonstrates API chaining by first fetching data from the Get Users List API, then using the response from that API (specifically the userId) to make a Create New Post request. After creating the post, the postId from the created post is used to fetch comments for the post from another API.

Get Users List (GET): Fetches a list of users and displays them in a dropdown.
Create New Post (POST): Uses the selected userId to create a new post with custom input for the title and body.
Get Comments by Post (GET): Fetches comments for the newly created post using the postId.
UI and State Management
The app is structured with React functional components.
State management is handled using the useState hook to manage API data such as users, post creation, and comments.
Each API call is executed asynchronously using axios and is tied to user interaction (button clicks).
Error Handling
The app has basic error handling for failed API requests.
If any API request fails, an error message is displayed in the UI.
Styling
Tailwind CSS is used for a responsive and modern layout.
Buttons and input fields are styled using Tailwind classes for quick, consistent design across the app.
Assumptions & Decisions
User Selection: Assumes the user must select a user from the list before proceeding to create a post.
API Flow: The flow is linear: first fetching the user list, then creating a post, and finally fetching comments related to the post.
API Response Use: The selected userId from the first API response is directly used in the POST request for creating a new post. Similarly, the postId from the post response is used to fetch comments.
Hardcoded API Endpoints: The API endpoints are fixed in the code. Custom APIs are not supported in the current version.
Completed Features
Chained API Calls: Successfully implemented API chaining, where data from one API is used as input for the next.
GET and POST Request Handling: Correctly handles both GET and POST requests, with user inputs tied to API calls.
Responsive UI: The UI is fully responsive using Tailwind CSS.
State Management: Managed component state with useState to handle API responses and user input.
Basic Error Handling: Error messages are displayed if any API request fails.
Known Issues
Minimal Error Handling: Error handling could be enhanced to provide more detailed feedback (e.g., showing which step in the chaining failed).
Limited Flexibility: Currently, only three APIs are chained in a specific sequence. Future iterations could allow for more flexible chaining with a variety of APIs.
Hardcoded Endpoints: The API URLs are static. Extending the app to allow users to input their own API URLs and parameters would increase flexibility.
