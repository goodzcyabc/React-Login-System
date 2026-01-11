# React Login & Registration System

A full-stack login + registration demo using React (frontend) and Node.js (backend), supporting validation, token-based authentication, and cross-environment workflows.

---

## Frontend Tech Stack

Uses the full “React ecosystem”:

- React
- React Router
- Redux
- Redux Thunk
- Bootstrap
- Axios
- Third-party libraries (e.g. classnames, validator, etc.)

---

## Backend Tech Stack

Data handling and API services:

- Node.js
- Express
- MySQL
- XAMPP (MySQL / Apache management)
- Additional third-party middleware/packages

---

## Cross-Origin (CORS) Handling

Two approaches:

1. **CORS on backend**  
   - Using middleware like `cors`
2. **Proxy on frontend**  
   - Using `proxy` configuration in development

---

## Environment Differences

Understanding environments and behavior differences:

1. **Development Environment**  
   - Where code is written and tested locally  
   - Proxy-based CORS handling applies here
2. **Production Environment**  
   - Browser execution environment after deployment
3. **Testing Environment**  
   - Used for QA testing and bug validation

---

## Core Features

1. **Registration**
   - Backend validation
   - Database persistence
2. **Message Notification**
   - Managed through Redux
   - Used for user feedback
3. **Login**
   - Frontend validation
   - Error feedback and UI state
4. **Token Authentication**
   - Token stored in Redux and/or local storage
5. **Token Workflow**
