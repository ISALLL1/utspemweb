import express from "express";
import eventRoutes from "./routes/eventRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import pembicaraRoutes from "./routes/pembicaraRoute.js";

const app = express();

// Middleware dasar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/pembicara", pembicaraRoutes);

// Endpoint Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "success", message: "Backend is running" });
});

app.get("/", (_req, res) => {
  res.json({ message: "Selamat datang di API Invofest!", version: "1.0.0" });
});

// Error Handler untuk 404
app.use((_req, res) => {
  res
    .status(404)
    .json({ status: "error", message: "Endpoint tidak ditemukan" });
});

// Global Error Handler
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

export default app;
