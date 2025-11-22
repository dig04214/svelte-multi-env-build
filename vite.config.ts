import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // SvelteKit 빌드 시 환경 변수로 모드 전달
  process.env.MODE = mode;

  return {
    plugins: [tailwindcss(), sveltekit()]
  };
});
