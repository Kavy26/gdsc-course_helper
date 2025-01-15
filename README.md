Certainly! Here’s a detailed README.md document structure for your project that you can include in your repository.

---

# Course Helper API & Web App

## Overview
This project consists of two parts: a **Frontend** built using **Next.js** (React) and a **Backend** built using **Express.js**. The application allows users to search for, view, and manage courses. It supports user authentication with JWT tokens and offers CRUD (Create, Read, Update, Delete) functionality for courses.

## Features
- **Frontend**:
  - Course search and display
  - User login and authentication
  - Course detail pages
  - User-friendly UI with Material-UI components
- **Backend**:
  - User registration and login with password encryption
  - JWT-based authentication for secure access
  - CRUD operations for managing courses
  - PostgreSQL database to store users and courses

## Technologies Used
### Frontend
- **Next.js**: A React framework for building server-side rendered applications and static websites.
- **Material-UI**: A popular React UI framework for creating stylish components.
- **React**: The JavaScript library for building user interfaces.
  
### Backend
- **Express.js**: A minimalist web framework for building APIs in Node.js.
- **PostgreSQL**: A relational database management system for storing user and course data.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Bcrypt**: For securely hashing passwords before storing them in the database.
- **CORS**: A package for enabling Cross-Origin Resource Sharing (CORS) on the backend.
- **dotenv**: For managing environment variables.

## Project Structure

### Frontend
```
frontend/
├── pages/
│   ├── _app.js         # Main app wrapper
│   ├── index.js        # Landing page with course search
│   ├── login.js        # Login page
│   └── courses/
│       └── [id].js     # Dynamic course details page
├── public/             # Static assets like images
├── styles/
│   ├── globals.css     # Global styles
│   ├── Home.module.css # Home page styles
│   └── Login.module.css# Login page styles
├── package.json        # Dependencies and scripts
└── next.config.js      # Next.js configuration
```

### Backend
```
backend/
├── routes/
│   ├── auth.js         # Authentication routes
│   ├── courses.js      # CRUD routes for courses
├── models/
│   ├── user.js         # User model schema
│   └── course.js       # Course model schema
├── middleware/
│   └── auth.js         # Authentication middleware for JWT
├── .env                # Environment variables (not versioned)
├── app.js              # Main app entry
├── database.js         # Database connection setup
├── package.json        # Dependencies and scripts
└── README.md           # Backend documentation
```

## Installation

### Frontend (React with Next.js)
1. Navigate to the `frontend` directory and install the dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

### Backend (Express.js)
1. Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add your PostgreSQL connection string and JWT secret:
   ```plaintext
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. Run the backend server:
   ```bash
   npm start
   ```

   The backend will run on [http://localhost:3001](http://localhost:3001).

## Usage

### Frontend

1. **Homepage**:
   - On the landing page, users can search for courses by name.
   - Results will be displayed in a list format, where users can click on a course to see more details.

2. **Login Page**:
   - Users can log in by providing a username and password.
   - Upon successful login, they receive a JWT token, which will be used for accessing protected routes in the API.

3. **Course Details Page**:
   - Once logged in, users can view more details about each course by clicking on the course name on the homepage.

### Backend

1. **Authentication**:
   - Users can register and log in via the `/api/auth/register` and `/api/auth/login` routes.
   - The backend will respond with a JWT token after successful login.

2. **Courses API**:
   - You can perform CRUD operations on the courses via the following endpoints:
     - **GET** `/api/courses`: Fetch a list of courses.
     - **POST** `/api/courses`: Create a new course (protected by JWT).
     - **PUT** `/api/courses/:id`: Update a course (protected by JWT).
     - **DELETE** `/api/courses/:id`: Delete a course (protected by JWT).

   All the course-related routes require the user to be authenticated, and you need to send the JWT token in the `Authorization` header as `Bearer <token>`.

### Example of Making API Requests

#### Registering a User (POST request to `/api/auth/register`):

```bash
POST /api/auth/register
{
  "username": "john_doe",
  "password": "your_password"
}
```

#### Logging in (POST request to `/api/auth/login`):

```bash
POST /api/auth/login
{
  "username": "john_doe",
  "password": "your_password"
}
```

The response will include a JWT token:
```json
{
  "token": "your_jwt_token_here"
}
```

#### Fetching Courses (GET request to `/api/courses`):

```bash
GET /api/courses
Authorization: Bearer <your_jwt_token>
```

### Database Setup

To set up the PostgreSQL database, you can run the following SQL commands in your PostgreSQL client.

#### Create `users` table:
```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Create `courses` table:
```sql
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Testing

To test the application:
1. Make sure the backend and frontend are running.
2. Use tools like **Postman** to interact with the backend API endpoints for registration, login, and CRUD operations for courses.
3. Test the frontend by visiting [http://localhost:3000](http://localhost:3000) in your browser and interacting with the UI.

## Contributing

Feel free to contribute to the project! You can:
- Fork the repository and submit a pull request.
- Report issues via the GitHub Issues tab.

## License

This project is licensed under the MIT License.

---

Feel free to modify the instructions as needed based on your specific project setup. Let me know if you need further adjustments or additions!
