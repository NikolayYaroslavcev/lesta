import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            components: '/src/components',
            constants: '/src/constants',
            hooks: '/src/hooks',
            pages: '/src/pages',
            store: '/src/app/store',
            types: '/src/types',
            router: '/src/router',
            app: '/src/app',
        }
    }

})
