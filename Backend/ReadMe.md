# Backend API Documentation

## API Endpoints

### Authentication

- **POST /api/auth/register** - Register a new user
  - Body: `{ "username": "your_username", "password": "your_password" }`
- **POST /api/auth/login** - Login with existing user
  - Body: `{ "username": "your_username", "password": "your_password" }`

### Courses

- **GET /api/courses** - Get all courses
- **POST /api/courses** - Create a new course (Requires Authentication)
  - Body: `{ "name": "course_name", "description": "course_description" }`
- **PUT /api/courses/:id** - Update a course (Requires Authentication)
  - Body: `{ "name": "course_name", "description": "course_description" }`
- **DELETE /api/courses/:id** - Delete a course (Requires Authentication)
