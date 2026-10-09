import fs from "node:fs";
import path from "node:path";

const PHOTO_DIR = path.join(process.cwd(), "content", "photos");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);

export default function photos() {
    if (!fs.existsSync(PHOTO_DIR)) {
        return [];
    }

    return fs
        .readdirSync(PHOTO_DIR)
        .filter((name) => {
            if (name.startsWith(".")) {
                return false;
            }
            return EXTENSIONS.has(path.extname(name).toLowerCase());
        })
        .sort((a, b) => a.localeCompare(b))
        .map((name) => {
            const base = path.basename(name, path.extname(name));
            const alt = base.replace(/[-_]+/g, " ").trim();
            return {
                src: `/photos/${encodeURIComponent(name)}`,
                alt,
            };
        });
}
