import { Request, Response, NextFunction } from "express";
import { env } from "./env.js";

/**
 * Middleware to check for admin authentication via API Key
 */
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey || apiKey !== env.ADMIN_API_KEY) {
        return res.status(401).json({
            message: "Unauthorized: Invalid or missing API Key"
        });
    }

    next();
}
