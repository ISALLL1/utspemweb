import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import pembicaraRoutes from "./routes/pembicaraRoute.js";

const app = express();
const port = process.env.PORT || 3000;

// 1. CORS Configuration: Mengizinkan frontend akses ke backend
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://my-web-invofest.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Middleware untuk membaca JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Routes: Endpoint API
// Pastikan nama rute di sini SAMA PERSIS dengan fetch di frontend
app.use("/api/events", eventRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/speakers", pembicaraRoutes);

// Health Check untuk cek apakah server hidup
app.get("/api/health", (_req, res) => {
  res.json({ status: "success", message: "Backend is running" });
});

// Root route
app.get("/", (_req, res) => {
  res.json({ message: "Selamat datang di API Invofest!", version: "1.0.0" });
});

// 3. 404 Handler: Jika akses rute yang tidak terdaftar
app.use((_req, res) => {
  res
    .status(404)
    .json({ status: "error", message: "Endpoint tidak ditemukan" });
});

// 4. Global Error Handler: Menangkap error database atau server
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error("SERVER ERROR:", err);
    res.status(err.status || 500).json({
      status: "error",
      message: err.message || "Internal Server Error",
    });
  },
);

// Jalankan Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📍 Routes: /api/events, /api/categories, /api/speakers`);
});

export default app;
