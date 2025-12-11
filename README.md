# 🔐 Mini User Authentication System

A complete, production-ready authentication system built with Express.js, MongoDB, JWT, and modern frontend design.

## ✨ Features

- **🔒 Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **✉️ Email Verification**: Verify user emails with secure tokens
- **🔑 Password Reset**: Secure password recovery with time-limited reset tokens
- **🎨 Modern UI**: Beautiful glassmorphism design with smooth animations
- **📱 Responsive**: Works seamlessly on all devices
- **⚡ Fast**: Built with Express.js and MongoDB for optimal performance

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **nodemailer** - Email service
- **express-validator** - Input validation

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with glassmorphism
- **Vanilla JavaScript** - API communication

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Email account for sending emails (Gmail recommended)

## 🚀 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd MINI_USER_AUTH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mini-user-auth
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_FROM=noreply@miniauth.com
   FRONTEND_URL=http://localhost:5000
   ```

   **Note**: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833)

4. **Start MongoDB** (if using local MongoDB)
   ```bash
   mongod
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
MINI_USER_AUTH/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── authController.js     # Authentication logic
├── middleware/
│   └── authMiddleware.js     # JWT verification
├── models/
│   └── User.js               # User schema
├── public/
│   ├── css/
│   │   └── style.css         # Styles
│   ├── js/
│   │   └── auth.js           # API communication
│   ├── index.html            # Landing page
│   ├── register.html         # Registration page
│   ├── login.html            # Login page
│   ├── dashboard.html        # Protected dashboard
│   ├── forgot-password.html  # Password reset request
│   ├── reset-password.html   # Password reset form
│   └── verify.html           # Email verification
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   └── userRoutes.js         # User endpoints
├── utils/
│   └── email.js              # Email utilities
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies
├── README.md                 # Documentation
└── server.js                 # Entry point
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| GET | `/api/auth/verify/:token` | Verify email | Public |
| POST | `/api/auth/login` | Login user | Public |
| POST | `/api/auth/forgot-password` | Request password reset | Public |
| POST | `/api/auth/reset-password/:token` | Reset password | Public |

### User Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/user/profile` | Get user profile | Private |

## 📝 Usage Examples

### Register a New User

```javascript
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Login

```javascript
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}

// Response
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "...",
      "username": "johndoe",
      "email": "john@example.com"
    }
  }
}
```

### Access Protected Route

```javascript
GET /api/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🔐 Security Features

- **Password Hashing**: Passwords are hashed using bcrypt with salt rounds
- **JWT Tokens**: Stateless authentication with expiration
- **Email Verification**: Users must verify email before login
- **Password Reset**: Secure token-based password recovery
- **Input Validation**: All inputs are validated and sanitized
- **Protected Routes**: Middleware ensures only authenticated users can access protected resources

## 🎨 Frontend Pages

1. **Landing Page** (`/`) - Introduction and features
2. **Register** (`/register.html`) - User registration with password strength indicator
3. **Login** (`/login.html`) - User authentication
4. **Dashboard** (`/dashboard.html`) - Protected user dashboard
5. **Forgot Password** (`/forgot-password.html`) - Request password reset
6. **Reset Password** (`/reset-password.html`) - Set new password
7. **Verify Email** (`/verify.html`) - Email verification confirmation

## 🧪 Testing

1. Start the server: `npm run dev`
2. Register a new user at `/register.html`
3. Check your email for verification link (or check server logs for the token)
4. Verify your email
5. Login at `/login.html`
6. Access the protected dashboard
7. Test password reset flow

## 🐛 Troubleshooting

### Email not sending
- Verify your email credentials in `.env`
- For Gmail, ensure you're using an App Password
- Check that EMAIL_HOST and EMAIL_PORT are correct

### MongoDB connection error
- Ensure MongoDB is running
- Check MONGODB_URI in `.env`
- For Atlas, verify your connection string and IP whitelist

### JWT errors
- Ensure JWT_SECRET is set in `.env`
- Check token expiration settings

## 📚 Learning Objectives

This project demonstrates:
- ✅ Express.js server setup and routing
- ✅ MongoDB integration with Mongoose
- ✅ User authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ Email verification workflow
- ✅ Password reset functionality
- ✅ Input validation and error handling
- ✅ Protected routes with middleware
- ✅ Modern frontend design
- ✅ API communication with fetch

## 📄 License

ISC

## 👨‍💻 Author

Built as a practice project for learning backend authentication concepts.

---

**Happy Coding! 🚀**
