import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                recipe: 'pages/recipe.html',
                identify: 'pages/identify.html',
                results: 'pages/results.html'
            }
        }
    }
});