# User Profiles Assignment 🚀

A modern React application that fetches user data from a public API and displays it as interactive profile cards. This project demonstrates fundamental and advanced React concepts including component composition, state management, API integration, and responsive design.

## 🌐 Live Demo

**[View Live Application](https://user-profiles-assignment.vercel.app/)**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Component Architecture](#component-architecture)
- [Assignment Requirements](#assignment-requirements)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

This project includes two implementations:

### Assignment 1: Basic Version (Bootstrap)
- Clean, responsive layout using Bootstrap
- Fundamental React concepts
- API data fetching and display
- Loading states and error handling

### Assignment 2: Advanced Version (Ant Design)
- Modern UI with Ant Design components
- Full CRUD operations (Create, Read, Update, Delete)
- Interactive features (like, edit, delete)
- Modal-based editing with form validation
- Responsive design for all screen sizes

## ✨ Features

### Core Features
- 📊 **User Profile Cards**: Display user information in attractive card layouts
- 🔄 **API Integration**: Fetch real user data from JSONPlaceholder API
- 🖼️ **Dynamic Avatars**: Generate unique avatars using DiceBear API
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Loading States**: Professional loading indicators during data fetch
- 🚨 **Error Handling**: Graceful error messages for failed API calls

### Advanced Features (Assignment 2)
- ❤️ **Like/Unlike**: Interactive heart button to like users
- ✏️ **Edit Users**: Modal-based editing with form validation
- 🗑️ **Delete Users**: Confirmation dialog for safe deletion
- 📧 **Toast Notifications**: User feedback for all actions
- 🎨 **Modern UI**: Clean, professional interface with hover effects
- 📋 **Form Management**: Complete form handling with validation

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with Hooks
- **JavaScript (ES6+)** - Modern JavaScript features
- **Bootstrap 4.5.2** - Responsive CSS framework (Assignment 1)
- **Ant Design** - Enterprise UI library (Assignment 2)
- **Font Awesome** - Icon library

### APIs
- **JSONPlaceholder API** - Mock user data
- **DiceBear Avatars API** - Dynamic avatar generation

### Build & Deployment
- **Create React App** - Zero-config React setup
- **Vercel** - Serverless deployment platform
- **Git & GitHub** - Version control

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/user-profiles-assignment.git
   cd user-profiles-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **For Assignment 2 (Advanced version with Ant Design)**
   ```bash
   npm install antd
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 💡 Usage

### Assignment 1 (Basic)
1. The app automatically loads user data on startup
2. View user profile cards with contact information
3. Responsive layout adapts to different screen sizes

### Assignment 2 (Advanced)
1. **View Users**: Browse through user profile cards
2. **Like Users**: Click the heart icon to like/unlike users
3. **Edit Users**: Click "Edit" to modify user information in a modal
4. **Delete Users**: Click "Delete" and confirm to remove users
5. **Responsive**: Works on all device sizes

## 🔌 API Integration

### User Data Source
```javascript
// Fetch user data
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await response.json();
```

### Avatar Generation
```javascript
// Generate dynamic avatars
const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
```

### Sample User Data Structure
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  }
}
```

## 🏗️ Component Architecture

```
App.js (Main Component)
├── UserCard.js (Individual user profile)
├── LoadingSpinner.js (Loading indicator)
└── EditUserModal.js (Edit user form - Assignment 2)
```

### Key React Concepts Demonstrated

#### State Management
```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [likedUsers, setLikedUsers] = useState([]);
```

#### Effect Hook for API Calls
```javascript
useEffect(() => {
  const fetchUsers = async () => {
    // API call implementation
  };
  fetchUsers();
}, []);
```

#### Conditional Rendering
```javascript
{loading ? <LoadingSpinner /> : <UserGrid users={users} />}
```

#### Props and Event Handling
```javascript
<UserCard 
  user={user} 
  onEdit={handleEdit}
  onDelete={handleDelete}
  onToggleLike={handleToggleLike}
/>
```

## 📝 Assignment Requirements

### ✅ Assignment 1 Requirements Met
- [x] Create React app with `create-react-app`
- [x] Fetch data from JSONPlaceholder API
- [x] Generate avatars using DiceBear API
- [x] Display loading indicator during API calls
- [x] Use Bootstrap for styling
- [x] Implement responsive design
- [x] Use React hooks (`useState`, `useEffect`)
- [x] Pass data via props
- [x] Render lists with `.map()`
- [x] Handle API errors gracefully

### ✅ Assignment 2 Requirements Met
- [x] All Assignment 1 requirements
- [x] Integrate Ant Design UI library
- [x] Create fully responsive layout
- [x] Implement user interactions (like, edit, delete)
- [x] Modal-based editing with form validation
- [x] **State Lifting**: Manage shared state in parent component
- [x] Handle complex state management
- [x] Provide user feedback with notifications

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and reliability.

### Deployment Steps
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy to Vercel**
   ```bash
   cd build
   vercel --prod
   ```

4. **Live URL**: https://user-profiles-assignment.vercel.app/

### Environment
- **Platform**: Vercel
- **Node Version**: 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `build`

## 📸 Screenshots

### Desktop View
- Clean, professional layout with Bootstrap cards (Assignment 1)
- Modern Ant Design interface with interactive elements (Assignment 2)

### Mobile View
- Fully responsive design
- Optimized for touch interactions
- Stacked card layout for better mobile experience

### Key Features
- Loading states with professional spinners
- Error handling with user-friendly messages
- Interactive elements with hover effects
- Modal editing with form validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


**Project Link**: [https://github.com/yourusername/user-profiles-assignment](https://github.com/yourusername/user-profiles-assignment)  
**Live Demo**: [https://user-profiles-assignment.vercel.app/](https://user-profiles-assignment.vercel.app/)

---


---

**Built with ❤️ using React, Bootstrap, Ant Design, and deployed on Vercel**
