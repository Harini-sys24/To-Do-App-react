
# 📝 React To-Do List App

A simple and interactive To-Do List application built using **React.js** and **Vite**. It allows users to manage daily tasks by adding new tasks, searching existing tasks, marking tasks as completed, and deleting tasks.

The application uses React Hooks for state management and browser `localStorage` to preserve tasks across page refreshes.

## 🚀 Live Demo

**Live Website:** https://to-do-app-react-git-main-code-nova-f0f5.vercel.app/

## ✨ Features

- ➕ **Add Tasks:** Create new tasks easily.
- ✅ **Mark as Completed:** Check or uncheck tasks as you finish them.
- 🗑️ **Delete Tasks:** Remove tasks you no longer need.
- 🔍 **Search Tasks:** Find tasks using the search bar.
- 💾 **Persistent Storage:** Tasks are saved in browser `localStorage` and remain available after refreshing the page in the same browser.
- ⚛️ **Reusable Components:** Built with modular React components.
- 📱 **Responsive Interface:** Designed for convenient task management across screen sizes.

## 🛠️ Technologies Used

- **React.js** — Building the user interface.
- **JavaScript (ES6+)** — Application logic.
- **HTML5** — Page structure.
- **CSS3** — Styling.
- **Vite** — Development server and build tool.
- **localStorage** — Saving tasks in the browser.
- **Git & GitHub** — Version control and source code hosting.
- **Vercel** — Deployment.

## 📂 Project Structure

```text
my-react-app/
├── public/
├── src/
│   ├── assets/
│   ├── AddItem.jsx
│   ├── App.jsx
│   ├── Content.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ItemsList.jsx
│   ├── LineItem.jsx
│   ├── SearchItem.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Harini-sys24/To-Do-App-react.git
```

### 2. Navigate to the Project Directory

```bash
cd To-Do-App-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### 5. Build for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 💾 How Data Is Stored

The application uses browser `localStorage` to save tasks.

- Tasks remain saved after refreshing the page in the same browser.
- Tasks are stored locally on the user's device.
- Tasks are not synchronized between different browsers or devices.
- Clearing the browser's site data may remove saved tasks.

## 📚 React Concepts Practiced

This project demonstrates practical use of:

- Functional components
- JSX
- Props and component communication
- `useState` Hook
- Event handling
- Rendering lists of components
- Conditional rendering and task completion
- Array methods such as `map()` and `filter()`
- Browser `localStorage`
- Component-based UI development

## 🔮 Future Improvements

- Edit existing tasks.
- Add task categories and priorities.
- Filter tasks by completed and pending status.
- Add due dates and reminders.
- Integrate a backend and database for cross-device synchronization.

## 👩‍💻 Author

**Harini G**

Computer Science and Engineering Student

GitHub: [Harini-sys24](https://github.com/Harini-sys24)

---

⭐ If you find this project useful, consider giving the repository a star!
