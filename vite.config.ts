import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 環境変数をロード
  const env = loadEnv(mode, '.', '');

  return {
    // 1. GitHub Pages用のベースパス設定（ここが重要です！）
    base: '/shintaro-slide/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // APIキーなどの環境変数を定義
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        // @ をプロジェクトルートとして解決する設定
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
