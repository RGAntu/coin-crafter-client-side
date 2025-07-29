# 💼 Micro Tasking and Earning Platform

A robust web platform where users can **earn money** by completing micro-tasks or **hire workers** to perform tasks. Inspired by sites like *Picoworkers* and *Clickworker*, but built with original design and modern features.

---

## 🔗 Live Site
[Visit CoinCrafter](https://coin-crafter-e54be.web.app/)

---

## 🧑‍💼 Admin Credentials

- **Email:** `antu@gmail.com`
- **Password:** `123456`

> ⚠️ *Please change the credentials after first login for security.*

---

## 🚀 Platform Features

- ✅ **Three Roles with Role-Based Dashboards**: Worker, Buyer, and Admin each have unique interfaces and permissions.
- 🔐 **Authentication with Firebase**: Email/password login, Google Sign-in, and secure JWT-based route protection.
- 🪙 **Coin-Based Economy**: Workers earn coins per task; Buyers purchase coins using Stripe to pay workers.
- 🧾 **Stripe Payment Integration**: Buyers can buy coin packages (10 coins = $1, 1000 coins = $35).
- 📄 **Task Management System**: Buyers can add, edit, or delete tasks. Workers can browse and submit tasks with proof.
- 📬 **Notification System**: Real-time role-based notifications for submissions, approvals, and withdrawal updates.
- 📈 **Admin Panel**: Manage users, tasks, and process withdrawals. Role updating and secure deletion included.
- 💰 **Withdrawal System**: Workers can withdraw their earnings in BDT via mobile banking (Bkash, Rocket, Nagad, etc.).
- 📤 **Image Uploading**: Integrated with imgbb for uploading profile and task images during registration and task creation.
- 📊 **Dashboard Stats & Pagination**: Real-time stats and paginated data for optimal performance and UX.

---

## 🖼️ Screens & Layout

### 🔸 Public Pages
- **Home**: Engaging animations, carousel, top workers, testimonials, and extra informative sections.
- **Register/Login**: Secure forms with validation and role-based default coin rewards (10 for Workers, 50 for Buyers).

### 🔹 Worker Dashboard
- **Home**: View stats, approved tasks, and earnings.
- **Task List**: See available tasks and submit proof.
- **My Submissions**: Paginated view of all submissions with status highlights.
- **Withdrawals**: Withdraw coins (20 coins = $1), with live BDT account methods.

### 🔹 Buyer Dashboard
- **Home**: Task overview with stats.
- **Add New Task**: Create tasks with full details, image upload, and validation.
- **Task Review**: Approve/reject submissions with automatic coin deduction/refund logic.
- **Purchase Coin**: Stripe-powered payments for coin top-up.
- **Payment History & Task Management**: View, update, delete tasks, and see payment logs.

### 🔹 Admin Dashboard
- **Home**: View overall stats (user counts, coin totals, payments).
- **Manage Users**: Edit roles, delete accounts.
- **Manage Tasks**: Remove any posted tasks.
- **Withdrawal Requests**: Approve worker withdrawals, update coin balance.

---

## 🧱 Tech Stack

- **Frontend**: React.js, TailwindCSS, DaisyUI, React Router, Axios, Swiper.js, Firebase Auth
- **Backend**: Node.js, Express.js, MongoDB, Firebase Admin SDK
- **Others**: Stripe, imgBB, JWT, SweetAlert2, React Hook Form, TanStack Query

---

## 🛡️ Security & Authorization

- 🔐 JWT Token Validation
- 🛑 Unauthorized Requests return proper HTTP status (401, 403)
- ✅ Role-based Middleware for Worker, Buyer, Admin routes
- ⚠️ Auto-logout on invalid or expired token

---

## 📢 Developer Button

A “Join as Developer” button is available in the Navbar, linking directly to the GitHub client repository for open-source contribution or preview.

---

## 🧪 Future Enhancements

- ✅ Realtime notification popup
- 🧩 Task categories & filters
- 📥 Buyer chat with Worker
- 📈 Analytics dashboard for Admins

---