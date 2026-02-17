import { Router } from "express";
import { storage } from "../storage.js";
import { insertSeoSettingsApiSchema } from "../../shared/schema.js";
import { z } from "zod";

const router = Router();

// GET all SEO settings
router.get("/seo", async (req, res) => {
    try {
        const settings = await storage.getSeoSettings();
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch SEO settings" });
    }
});

// GET SEO settings by slug
router.get("/seo/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;
        const settings = await storage.getSeoSettingsBySlug(slug);
        if (!settings) {
            return res.status(404).json({ message: "SEO settings not found" });
        }
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch SEO settings" });
    }
});

// POST create SEO settings
router.post("/seo", async (req, res) => {
    try {
        const data = insertSeoSettingsApiSchema.parse(req.body);
        const existing = await storage.getSeoSettingsBySlug(data.pageSlug);
        if (existing) {
            return res.status(409).json({ message: "SEO settings for this slug already exist" });
        }
        const settings = await storage.createSeoSettings(data);
        res.status(201).json(settings);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: "Invalid data", errors: error.errors });
        }
        res.status(500).json({ message: "Failed to create SEO settings" });
    }
});

// PATCH update SEO settings
router.patch("/seo/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const data = insertSeoSettingsApiSchema.partial().parse(req.body);
        const updated = await storage.updateSeoSettings(id, data);
        res.json(updated);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: "Invalid data", errors: error.errors });
        }
        res.status(500).json({ message: "Failed to update SEO settings" });
    }
});

// DELETE SEO settings
router.delete("/seo/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        await storage.deleteSeoSettings(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Failed to delete SEO settings" });
    }
});

export default router;
