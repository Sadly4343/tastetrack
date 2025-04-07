import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    root: "./",
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