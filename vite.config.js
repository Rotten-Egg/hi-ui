/*
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-31 18:48:22
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-14 18:35:57
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const resolve = dir => path.join(__dirname, './', dir)
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/components/css/public.less";'
      }
    }
  }
})
