const express = require("express");
const cors = require("cors");
const authRoutes = require("C:\Users\ 91940\OneDrive\Desktop\Course Helper\Backend\routes\auth.js");
const courseRoutes = require("C:\Users\ 91940\OneDrive\Desktop\Course Helper\Backend\routes\courses.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
