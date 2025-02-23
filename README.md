# Marathon Management System

## 🚀 Live Site
[Click Here to Visit the Live Website](#)  

## 📌 About
The **Marathon Management System** is a full-stack web application that connects event organizers with participants, allowing users to create, browse, and manage marathon events. The platform ensures a smooth registration process while providing secure authentication and an intuitive user experience.

## 🌟 Features
- 🔹 **User Authentication:** Secure login and registration using email/password and Google authentication.
- 🔹 **Marathon Management:** Users can create, update, and delete marathon events.
- 🔹 **Marathon Registration:** Participants can register, update, or cancel their marathon applications.
- 🔹 **Dashboard:** Personalized dashboard to manage created and registered marathons.
- 🔹 **Dynamic Search & Sorting:** Search registered marathons and sort events by date.
- 🔹 **Private Routes & JWT Authentication:** Ensures security by protecting sensitive pages.
- 🔹 **Dark Mode & Responsive Design:** Fully responsive UI with a toggle for dark and light themes.

## 🏗️ Tech Stack
- **Frontend:** React, Vite.js, Tailwind CSS, React Router, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Firebase Authentication, JWT (JSON Web Token)
- **Hosting:** Firebase (Frontend), Vercel (Backend)
- **Other Tools:** React Datepicker, SweetAlert2, React Toastify

## 📂 Folder Structure
```
📦 marathon-management-system
 ┣ 📂 client (Frontend)
 ┣ 📂 server (Backend)
 ┣ 📜 README.md
```

## 🛠 Installation & Setup
### Clone the repository
```sh
git clone https://github.com/yourusername/marathon-management-system.git
cd marathon-management-system
```
### Install dependencies
#### Client-side
```sh
cd client
npm install
```
#### Server-side
```sh
cd server
npm install
```
### Set up environment variables
Create a `.env` file in both **client** and **server** directories and configure your **Firebase**, **MongoDB**, and **JWT_SECRET** keys.

### Run the project
#### Start the server
```sh
cd server
npm run dev
```
#### Start the frontend
```sh
cd client
npm run dev
```

## 🎯 Key Functionalities
### 🔹 Home Page
- Displays upcoming marathons, featured events, and an image slider.
- Users can view marathon details before logging in.

### 🔹 User Dashboard (Private Route)
- **Marathon Form:** Allows users to create marathons.
- **My Marathon List:** Shows marathons created by the logged-in user.
- **My Apply List:** Displays marathons a user has applied for.

### 🔹 Marathon Details Page (Private Route)
- Shows full details of a marathon.
- Displays total registrations.
- Allows users to register for the event.

### 🔹 Authentication System
- Email/password login & Google authentication.
- Secure JWT-based authentication for private routes.

### 🔹 Extra Features
- **Countdown Timer**: Displays time left for a marathon.
- **Toast Notifications**: Success/Error messages for CRUD operations.
- **Pagination**: Load more marathons efficiently.

## 🔒 Environment Variables
Create a `.env` file inside the `server` and `client` directories with the following values:

#### Server-side `.env`
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
#### Client-side `.env`
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

## 🚀 Deployment
### Frontend (Firebase Hosting)
```sh
npm run build
firebase deploy
```
### Backend (Vercel Hosting)
```sh
vercel
```

## 🤝 Contributions
Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit a pull request.

## 📜 License
This project is **MIT Licensed**.

---

📩 **Developed by:** [Your Name]  
🔗 **GitHub Repository:** [Frontend Repo](#) | [Backend Repo](#)


