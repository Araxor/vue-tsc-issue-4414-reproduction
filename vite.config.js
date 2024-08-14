import vue from '@vitejs/plugin-vue2';
import checker from 'vite-plugin-checker';

export default {
  plugins: [vue(), checker({ vueTsc: true })],
};
