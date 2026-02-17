import type { Express } from "express";
import { upload } from "../lib/cloudinary.js";
import { isAuthenticated } from "../auth.js";

export function registerUploadRoutes(app: Express) {
    app.post(
        "/api/upload",
        isAuthenticated,
        upload.single("image"),
        (req, res) => {
            const file = req.file as Express.Multer.File & { path?: string };
            if (!file) {
                console.error("Upload Failed: No file provided in request");
                return res.status(400).json({ message: "No file uploaded" });
            }
            console.log(`Upload Successful: ${file.originalname} -> ${file.path}`);
            res.json({ url: file.path });
        }
    );
}
