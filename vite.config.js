// filepath: c:\Users\Logan\tastetrack\tastetrack\vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    root: "./",
    base: "/tastetrack/", // Use relative paths
    build: {
        outDir: './dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                favorite: resolve(__dirname, "favorite.html"),
            }
        }
    },
    server: {
        open: "/",
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: "src/components", dest: "src" },
                { src: "src/images", dest: "src" },
            ]
        })
    ]
});