# 🔄 SkillSwap – AI-Powered Skill Exchange Platform

> **Learn a skill by teaching a skill — without paying for courses.**

SkillSwap is an AI-powered peer-to-peer skill exchange platform where users can **teach what they know and learn what they want** through skill swapping instead of traditional course payments. The platform uses **Google Gemini AI** to provide intelligent skill recommendations, personalized learning insights, and AI-powered match analysis.

For example, if Rahul knows Python and wants to learn Guitar, while Priya knows Guitar and wants to learn Python, SkillSwap can help them discover each other and exchange their skills.

---

## 🏗️ System Architecture

SkillSwap follows a modern client-server architecture where the **React frontend** provides the user interface, the **backend/API layer** handles application logic and secure AI requests, **Firebase Firestore** manages real-time data, and **Google Gemini AI** powers intelligent recommendations and analysis.

```text
                         ┌──────────────────────────┐
                         │          USER            │
                         │ Students / Skill Partners │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │     REACT + VITE FRONTEND       │
                    │                                 │
                    │ • Authentication & Profiles    │
                    │ • Skill Search & Matching      │
                    │ • Chat & Swap Requests         │
                    │ • Scheduling & Meetings        │
                    │ • QR Attendance & Certificates │
                    │ • Ratings, Leaderboard, Admin  │
                    └──────────────┬──────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
          ┌───────────────────┐         ┌──────────────────────┐
          │   FIREBASE        │         │    BACKEND / API     │
          │                   │         │                      │
          │ • Authentication  │◄───────►│ • Business Logic     │
          │ • Firestore DB    │         │ • API Endpoints      │
          │ • Real-time Data  │         │ • Secure AI Requests │
          └─────────┬─────────┘         └──────────┬───────────┘
                    │                              │
                    ▼                              ▼
          ┌───────────────────┐         ┌──────────────────────┐
          │ APPLICATION DATA  │         │   GOOGLE GEMINI AI   │
          │                   │         │                      │
          │ • Users           │         │ • Skill Suggestions  │
          │ • Skills          │         │ • Match Analysis     │
          │ • Swap Requests   │         │ • Career Insights    │
          │ • Chats           │         │ • AI Explanations    │
          │ • Sessions        │         └──────────────────────┘
          │ • Ratings         │
          └───────────────────┘
```

### Architecture Flow

1. The **user interacts with the SkillSwap web application** built using React and Vite.
2. The frontend sends and receives application data through Firebase and the backend/API services.
3. **Firebase Firestore** stores and synchronizes user profiles, skills, swap requests, chats, sessions, ratings, and other platform data in real time.
4. When an AI-based feature is requested, the backend/API layer processes the request and communicates with **Google Gemini AI**.
5. Gemini analyzes relevant skill and user information to generate recommendations, match explanations, skill insights, and other AI-powered responses.
6. The generated results are returned to the frontend and displayed to the user.

---

## 📌 Problem Statement

Traditional online learning platforms often require users to pay for courses and mainly provide pre-recorded tutorial content. However, many people already have valuable skills they can teach and may prefer learning another skill in return rather than spending money.

SkillSwap solves this problem by creating a **reciprocal peer-to-peer learning environment** where users can exchange knowledge, communicate directly, schedule sessions, attend meetings, and ask questions during their learning journey.

---

## ✨ Key Features

### 🤖 AI Smart Skill Advisor
- Provides personalized AI-powered skill suggestions.
- Analyzes users' teaching and learning interests.
- Suggests complementary and valuable skills.
- Generates learning insights and recommendations.

### 🧠 AI Skill Match Recommendation Engine
- Recommends suitable people for skill exchange.
- Performs multi-factor match analysis.
- Provides an AI-generated reason explaining why a match is suitable.
- Helps users discover compatible learning partners.

### 🔍 Search Skills and Members
- Search for skills and potential skill exchange partners.
- Discover users based on the skills they can teach or want to learn.

### 🔄 Skill Swap Requests
- Send and manage skill exchange requests.
- Connect with users for reciprocal learning.

### 💬 Chat System
- Allows users to communicate with their skill exchange partners.
- Makes it easier to discuss learning requirements and session details.

### 📅 Scheduling and Calendar
- Plan and organize skill exchange sessions.
- Manage upcoming learning activities.

### 🎥 Video Meeting Support
- Supports online interaction between skill exchange partners.
- Enables users to conduct virtual learning sessions.

### 📱 QR-Based Attendance
- QR functionality can be used to record or verify session attendance.
- Helps track participation in skill exchange sessions.

### ⭐ Ratings and Certificates
- Users can rate their learning experience.
- Certificate and completion-related features help provide proof of participation.

### 🏆 Leaderboard
- Displays user participation and engagement.
- Encourages active contribution to the SkillSwap community.

### 👤 User Profiles
- Users can create and manage their profiles.
- Profiles contain information related to skills, learning interests, and activity.

### 🛠️ Admin Panel
- Administrative interface for managing platform-related information and reports.

---

## 🧩 How SkillSwap Works

1. **Create an account** and build your profile.
2. Add the skills you can **teach**.
3. Add the skills you want to **learn**.
4. Search for users or use the **AI Skill Match Recommendation Engine**.
5. View AI-powered match suggestions and compatibility analysis.
6. Send a **Skill Swap Request** to a suitable user.
7. Communicate through the platform and schedule a session.
8. Attend the learning session using available meeting and attendance features.
9. Rate the experience and continue exchanging skills with the community.

---

## 🧠 AI Features

SkillSwap integrates **Google Gemini AI** through the `@google/genai` SDK.

The current project implementation uses Gemini API calls for features such as:

- Personalized AI skill suggestions
- AI-powered skill match recommendations
- Match compatibility analysis
- AI-generated reasons and rationale for recommended matches
- Skill and career learning insights

> The server-side implementation uses a Gemini model configured in `server.ts`. If needed, the model name can be changed there according to the Gemini model available in your API configuration.

---

## 🏗️ Technology Stack

| Technology | Purpose |
|---|---|
| **React** | Front-end user interface development |
| **TypeScript** | Type-safe JavaScript development |
| **Vite** | Fast development server and build tool |
| **Tailwind CSS** | UI styling and responsive design |
| **Motion** | Animations and interactive UI effects |
| **Lucide React** | Icons for the user interface |
| **Firebase** | Backend services and application integration |
| **Cloud Firestore** | Real-time database and data storage |
| **Google Gemini AI** | Generative AI recommendations and intelligent analysis |
| **Express.js** | Backend API server |
| **Node.js** | Server-side JavaScript runtime |

---

## 📂 Project Structure

```text
skillswap---skill-exchange-platform/
│
├── src/
│   ├── backend/
│   │   ├── firebase.ts
│   │   └── firestoreService.ts
│   │
│   ├── components/
│   │   ├── AIAdvisorPage.tsx
│   │   ├── AIMatchSection.tsx
│   │   ├── AdminPanelPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── CalendarSchedulePage.tsx
│   │   ├── LeaderboardPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── SearchSkillsPage.tsx
│   │   ├── VideoMeetingModal.tsx
│   │   └── other UI components...
│   │
│   ├── context/
│   │   └── SkillSwapContext.tsx
│   │
│   ├── data/
│   │   └── mockData.ts
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── server.ts
├── firestore.rules
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env.example
└── README.md
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A Google Gemini API key
- Firebase project configuration, if required for your deployment

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd skillswap---skill-exchange-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file based on `.env.example`:

```env
GEMINI_API_KEY
```

### 4. Run the development server

```bash
npm run dev
```

The application will start in development mode.

---

## 📜 Available Scripts

### Start development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm start
```

### Check TypeScript errors

```bash
npm run lint
```

### Clean build files

```bash
npm run clean
```

---

## 🔌 API Endpoints

The Express server includes endpoints for application health and AI functionality.

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/health` | Checks whether the backend is running |
| `POST` | `/api/ai-suggestions` | Generates AI-powered skill suggestions and insights |
| `POST` | `/api/ai-match-recommendations` | Generates AI-powered skill match recommendations |

---

## 🔐 Security

The project includes Firebase Firestore security rules in:

```text
firestore.rules
```

Sensitive values such as API keys should be stored in environment variables and should not be committed to a public repository.

---

## 🎯 Project Objectives

1. To design and develop an AI-powered peer-to-peer skill exchange platform.
2. To enable users to learn skills by exchanging their own knowledge instead of paying for traditional courses.
3. To use Google Gemini AI for personalized skill suggestions and intelligent match recommendations.
4. To build a reciprocal matching system that connects users based on teaching and learning skills.
5. To provide communication, scheduling, attendance, rating, and participation features for skill exchange sessions.
6. To store and synchronize application data using Firebase and Cloud Firestore.

---

## 🚀 Future Enhancements

Possible future improvements include:

- Personalized AI learning roadmaps
- Advanced skill-gap analysis
- More detailed skill verification
- Commitment and refund/deposit system
- Certificate document verification
- Improved video meeting integration
- Real-time notifications
- AI-generated practice exercises
- Advanced user reputation and trust scoring
- Mobile application support
- Improved analytics for administrators

---

## 🎓 Educational Project

SkillSwap is developed as a school/academic project to demonstrate practical use of React, TypeScript, Firebase, Express.js, and Generative AI. Some features are intended as a demonstration and may require additional configuration or further development for production use.

---

## 🌟 Why SkillSwap?

Unlike traditional online learning platforms that primarily focus on paid courses and tutorial content, SkillSwap focuses on **human-to-human learning and knowledge exchange**.

Users can:

- Teach what they already know.
- Learn skills from other people.
- Ask questions and interact directly.
- Find compatible learning partners using AI.
- Build practical learning connections without depending entirely on paid courses.

---

## 👨‍💻 Author

**Kedar Tanaji Shivkar**

Project: **SkillSwap – AI-Powered Skill Exchange Platform**

---

## 📄 License

This project is currently intended for educational and academic purposes.
---
