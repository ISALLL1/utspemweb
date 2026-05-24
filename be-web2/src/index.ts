import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import pembicaraRoutes from "./routes/pembicaraRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/events", eventRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/pembicara", pembicaraRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "success", message: "Backend is running" });
});

app.get("/", (_req, res) => {
  res.json({ message: "Selamat datang di API Invofest!", version: "1.0.0" });
});

app.use((_req, res) => {
  res
    .status(404)
    .json({ status: "error", message: "Endpoint tidak ditemukan" });
});

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

// Hanya listen untuk development
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () =>
    console.log(`🚀 Server running on http://localhost:${port}`),
  );
}

export default app;
