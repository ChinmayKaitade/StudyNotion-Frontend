# 💻 StudyNotion Frontend

## 🚀 Overview

**StudyNotion-Frontend** is the dynamic, responsive, and feature-rich client application for the **StudyNotion EdTech Platform**. It delivers a seamless learning and teaching experience, allowing users to browse courses, enroll, consume content, and manage their profiles.

Built on the **MERN Stack**'s client side, this application utilizes **ReactJS** for the UI, **Redux** for state management, and **Tailwind CSS** for a modern, utility-first design approach. It communicates with the dedicated [StudyNotion-Backend](https://github.com/ChinmayKaitade/StudyNotion-Backend) via REST APIs.

---

## 🏗️ Tech Stack

| Technology           | Description                                                                                                 |
| :------------------- | :---------------------------------------------------------------------------------------------------------- |
| ⚛️ **ReactJS**       | Primary library for building the Single-Page Application (SPA) user interfaces.                             |
| 🔴 **Redux Toolkit** | Centralized state management for complex application data flow and global states (e.g., Auth, Course data). |
| 🎨 **Tailwind CSS**  | Utility-first CSS framework for rapid, custom, and responsive styling.                                      |
| 🌐 **Axios**         | Promise-based HTTP client for making secure requests to the StudyNotion Backend APIs.                       |

---

## 🧩 Key Features

This frontend application supports all user roles (Student, Instructor, Admin) with specialized views:

✅ **User Authentication & Security:** Secure, responsive UI for Signup, Login, OTP verification, and Forgot Password flows.
✅ **Interactive Dashboards:** Custom user dashboards tailored for **Students** (My Courses, Profile) and **Instructors** (Course Insights, Management).
✅ **Comprehensive Course Catalog:** Filterable, searchable catalog and detailed course viewing pages displaying ratings and reviews.
✅ **Seamless Enrollment & Payment:** Guided checkout process featuring a clean UI and integration with the **Razorpay** payment gateway API.
✅ **Full CRUD for Instructors:** Dedicated interfaces for creating, updating, and managing course content (lectures, sections, media).
✅ **Media Integration:** Beautiful display of videos and images, utilizing content served from **Cloudinary**.

---

## 📁 Folder Structure


StudyNotion-Frontend/
│
├── public/ \# Static assets and index.html
├── src/
│ ├── components/ \# Reusable UI components (e.g., Buttons, Cards, Modals)
│ ├── pages/ \# Main application views (e.g., Home, Login, Dashboard)
│ ├── services/ \# Logic for API calls (Interacting with Backend)
│ ├── slices/ \# Redux state slices for Auth, Cart, Courses, etc.
│ ├── assets/ \# Images, fonts, and icons
│ ├── styles/ \# Global CSS and Tailwind configurations
│ └── App.js \# Root component
├── package.json \# Dependencies and scripts
└── tailwind.config.js \# Custom Tailwind CSS configuration



---

## ⚙️ Installation & Setup

Follow these steps to get the StudyNotion Frontend running on your local machine 👇

### 1️⃣ Clone the repository

```bash
git clone [https://github.com/ChinmayKaitade/StudyNotion-Frontend](https://github.com/ChinmayKaitade/StudyNotion-Frontend)
cd StudyNotion-Frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

Create a `.env.local` file in the root directory and add the environment variables for the backend connection.

```
# Replace with your StudyNotion-Backend URL
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### 4️⃣ Start the application

```bash
npm start
```

The application will start on 👉 **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**

---

## 🌐 Live Demo

_Coming Soon\! A link to the live deployment will be added here._

---

## 🤝 Contributing

Contributions are welcome\! If you'd like to improve the UI/UX or add new features, please feel free to **fork** the repository and submit a **pull request**. 🙌

---

## 🧑‍💻 Author

**Chinmay Kaitade**
💼 _Full Stack Developer | MERN Stack Enthusiast_
🔗 [GitHub](https://github.com/ChinmayKaitade) | [LinkedIn](https://linkedin.com/in/chinmay-sharad-kaitade)
