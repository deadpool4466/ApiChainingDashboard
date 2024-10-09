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
