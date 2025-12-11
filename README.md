# Mini User Authentication System

A simple authentication system I built using Node.js, Express, and MongoDB.

## What it does

- User registration with email verification
- Secure login with JWT tokens
- Password hashing using bcrypt
- Protected user routes
- Simple and clean UI

## Technologies Used

- **Node.js** & **Express.js** - Backend
- **MongoDB** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email verification

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
FRONTEND_URL=http://localhost:5000
```

3. Start the server:
```bash
npm run dev
```

4. Open browser at `http://localhost:5000`

## API Endpoints

**Auth Routes:**
- `POST /api/auth/register` - Register new user
- `GET /api/auth/verify/:token` - Verify email
- `POST /api/auth/login` - Login

**User Routes (Protected):**
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile

## Features

✅ Email verification system  
✅ JWT-based authentication  
✅ Password hashing with bcrypt  
✅ Input validation  
✅ Protected routes  
✅ Clean and simple UI  

## Project Structure

```
├── config/         # Database config
├── controllers/    # Route handlers
├── middleware/     # Auth middleware
├── models/         # MongoDB models
├── routes/         # API routes
├── utils/          # Helper functions
├── public/         # Frontend files
└── server.js       # Main file
```

## Notes

- Verification tokens are logged in console for testing
- Make sure MongoDB is running before starting the server
- Use `.env.example` as reference for environment variables
