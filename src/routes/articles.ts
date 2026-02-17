import { Router } from "express";
import { storage } from "../storage.js";
import { insertArticleApiSchema, updateArticleApiSchema } from "../../shared/schema.js";
import { z } from "zod";

export const articlesRouter = Router();

// GET /api/articles
articlesRouter.get("/", async (req, res) => {
    try {
        const status = req.query.status as string | undefined;
        const articles = await storage.getArticles(status);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
});

// GET /api/articles/:slug
// Note: This might conflict if we had /api/articles/some-static-route, but we don't.
// Also need to handle ID vs Slug? The plan said :slug.
articlesRouter.get("/:slug", async (req, res) => {
    const slug = req.params.slug;
    try {
        const article = await storage.getArticleBySlug(slug);
        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch article" });
    }
});

// POST /api/articles
articlesRouter.post("/", async (req, res) => {
    try {
        const data = insertArticleApiSchema.parse(req.body);
        const article = await storage.createArticle(data);
        res.status(201).json(article);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Zod Validation Error (POST /api/articles):", error.errors);
            res.status(400).json({ error: error.errors });
        } else {
            res.status(500).json({ error: "Failed to create article" });
        }
    }
});

// PATCH /api/articles/:id
articlesRouter.patch("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid article ID" });
    }

    try {
        const data = updateArticleApiSchema.parse(req.body);
        const article = await storage.updateArticle(id, data);
        res.json(article);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Zod Validation Error (PATCH /api/articles/:id):", error.errors);
            res.status(400).json({ error: error.errors });
        } else {
            console.error(error);
            res.status(500).json({ error: "Failed to update article" });
        }
    }
});

// DELETE /api/articles/:id
articlesRouter.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid article ID" });
    }

    try {
        await storage.deleteArticle(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete article" });
    }
});
