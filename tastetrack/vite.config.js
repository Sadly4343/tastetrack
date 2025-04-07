import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: 'index.html',
                recipe: 'recipe.html',
                identify: 'identify.html'
            }
        }
    }
});