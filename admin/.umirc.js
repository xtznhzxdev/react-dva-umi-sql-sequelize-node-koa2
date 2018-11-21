import { resolve } from "path";
const targetUrl = 'http://localhost:8009/';
// ref: https://umijs.org/config/
export default {
  history: 'hash', // browser、hash
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      polyfills: ['ie11'],
      dva: {
        immer: true
      },
      dynamicImport: true,
      title: 'umi-dva-antd',
      dll: false,
      pwa: false,
      hardSource: false,
      locale:'zh-CN',// i18n
      routes: {
        exclude: [],
      },
    }],
  ],
  theme: '',
  alias: {
    '@': resolve(__dirname, './src')
  },
  proxy: {
    "/user": {
      "target": targetUrl,
      "changeOrigin": true
    },
    "/article": {
      "target": targetUrl,
      "changeOrigin": true
    },
    "/todo": {
      "target": targetUrl,
      "changeOrigin": true
    }
  }
}
