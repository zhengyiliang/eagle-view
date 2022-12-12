import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {
    configProvider: {
      prefixCls: 'eagle-view', // 修改前缀
    },
    // theme: {
    //   token: {
    //     colorPrimary: '#ddd',
    //   },
    // },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  npmClient: 'pnpm',
});
