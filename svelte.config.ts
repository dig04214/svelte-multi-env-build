import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// 환경별 빌드 디렉토리 설정
const mode = process.env.MODE || 'production';
const buildDir = `build/${mode}`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: buildDir,
      assets: buildDir,
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;
