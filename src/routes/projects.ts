import { Router } from "express";
import { db } from "../db";
import { projectsTable } from "../../shared/schema";

const router = Router();

// Get all projects
router.get("/", async (_req, res) => {
  try {
    const projects = await db.select().from(projectsTable);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

export default router;
