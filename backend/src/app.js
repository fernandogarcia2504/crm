import express from "express";

import authRoutes from "./routes/auth.routes.js";
import businessRoutes from "./routes/business.routes.js"
import companyRoutes from "./routes/company.routes.js"

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/businessess", businessRoutes);
app.use("/api/companies", companyRoutes);

export default app;