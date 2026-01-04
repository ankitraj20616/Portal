# Stock Prediction Portal

The Stock Prediction Portal is a full-stack web application built using Django and React that demonstrates a complete, production-style implementation of JWT-based authentication using access and refresh tokens. The project focuses on secure authentication, authorization, protected and public routing, and scalable frontend–backend communication patterns that are commonly used in real-world applications.

This project serves as a strong foundation for future stock prediction and data analytics features while showcasing industry-standard authentication architecture.

---

## Project Overview

The application consists of a Django REST Framework backend secured with JSON Web Tokens (JWT) and a React frontend built with Vite. Authentication is handled using access and refresh tokens, where access tokens are short-lived and refresh tokens are used to silently obtain new access tokens without forcing the user to log in again.

The frontend manages authentication state globally using React Context and ensures seamless user experience by automatically refreshing expired tokens through Axios interceptors.

---

## Key Features

### Authentication and Authorization
- JWT authentication using access and refresh tokens
- Secure login and registration functionality
- Automatic access token refresh using refresh token
- Global authentication state using React Context API
- Logout functionality that clears authentication state and tokens
- Role-ready architecture for future authorization expansion

### Frontend Features
- React with Vite for fast development and optimized builds
- React Router for client-side routing
- Public and protected routes
- Axios instance with request and response interceptors
- Automatic token attachment to API requests
- Automatic retry of failed requests after token refresh
- Modular and reusable UI components

### Backend Features
- Django REST Framework for API development
- SimpleJWT for access and refresh token management
- Secure protected APIs using permission classes
- Clear separation of concerns using Django apps
- REST-compliant authentication endpoints

---

## Authentication Flow

1. User logs in using valid credentials.
2. Backend returns an access token and a refresh token.
3. Access token is used to authenticate API requests.
4. When the access token expires, the API returns a 401 response.
5. Axios interceptor automatically sends the refresh token.
6. Backend issues a new access token.
7. Original request is retried transparently.
8. If the refresh token expires, the user is logged out.

This flow ensures a seamless and secure authentication experience without manual intervention.

---

## Project Structure

Portal/
│
├── backend/
│ ├── accounts/ # User authentication logic
│ ├── api/ # Public and protected APIs
│ ├── stock_prediction_main/
│ │ ├── settings.py
│ │ ├── urls.py
│ │ ├── wsgi.py
│ │ └── asgi.py
│ ├── manage.py
│ ├── db.sqlite3
│ └── pyproject.toml
│
├── Frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── dashboard/
│ │ │ │ └── Dashboard.jsx
│ │ │ ├── AuthForm.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── Hero.jsx
│ │ │ └── Footer.jsx
│ │ ├── AuthProvider.jsx
│ │ ├── axiosinstance.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ ├── package.json
│ └── vite.config.js
│
└── README.md

yaml
Copy code

---

## API Endpoints

### Authentication Endpoints

| Method | Endpoint              | Description                             |
|------|----------------------|-----------------------------------------|
| POST | /api/token/          | Obtain access and refresh tokens        |
| POST | /api/token/refresh/  | Refresh access token using refresh token |

### Protected API Example

| Method | Endpoint                    | Access Requirement |
|------|-----------------------------|--------------------|
| GET  | /api/v1/protected-view/     | Authenticated user |

---

## Technology Stack

### Backend
- Python
- Django
- Django REST Framework
- SimpleJWT

### Frontend
- React
- Vite
- React Router
- Axios
- Context API
- Tailwind CSS

---

## Environment Configuration

### Frontend Environment Variables

Create a `.env` file inside the `Frontend` directory:

VITE_BASE_URL=http://127.0.0.1:8000

yaml
Copy code

---

## Setup and Installation

### Backend Setup

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

yaml
Copy code

Backend server runs at:

http://127.0.0.1:8000

yaml
Copy code

---

### Frontend Setup

cd Frontend
npm install
npm run dev

yaml
Copy code

Frontend application runs at:

http://localhost:5173

yaml
Copy code

---

## Axios Interceptor Implementation

The Axios instance is configured to:
- Attach the access token to all outgoing requests
- Detect expired access tokens
- Request a new access token using the refresh token
- Retry the original request automatically
- Log out the user if refresh token is invalid or expired

This approach centralizes authentication logic and ensures consistency across the application.

---

## Security Practices

- Short-lived access tokens
- Long-lived refresh tokens
- Centralized token handling
- Protected backend endpoints
- Frontend route protection
- Automatic logout on refresh token expiration

---

## Future Enhancements

- Stock price prediction using machine learning models
- Role-based access control
- HttpOnly cookie-based refresh tokens
- Token rotation and blacklisting
- Dockerized deployment
- Production-grade logging and monitoring

---

## Author

Ankit Raj

This project was developed as a full-stack learning and portfolio project to demonstrate real-world authentication, authorization, and frontend–backend integration patterns.

---

## License

This project is open for educational and learning purposes.
