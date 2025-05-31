# Raghu Notes

Live website: [https://raghu-notes-1.onrender.com](https://raghu-notes-1.onrender.com)


# Raghu Notes 📝

A simple full-stack notes app using:

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js + Express
- **Database**: MongoDB (local or Atlas)

---

## 🚀 Setup Instructions

### 1. Backend

```bash
cd backend
npm install
```

Update `.env` with your MongoDB URI:

```
MONGO_URI=your-mongodb-uri
```

Run the server:

```bash
npm start
```

### 2. Frontend

Open the `frontend/index.html` in your browser, or deploy to [Vercel](https://vercel.com).

Make sure to edit `frontend/app.js` with your backend API URL:

```js
const API_URL = 'https://your-backend.onrender.com/api/notes';
```

---

## 🌐 Deploy Free

- Frontend → Vercel
- Backend → Render
- DB → MongoDB Atlas
