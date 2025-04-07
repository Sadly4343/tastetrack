// filepath: c:\Users\Logan\tastetrack\tastetrack\vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./",
    base: "", // Use relative paths
    build: {
        outDir: './dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                recipe: resolve(__dirname, "recipe.html"),
                identify: resolve(__dirname, "identify.html"),
            }
        }
    }
});