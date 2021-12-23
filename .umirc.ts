import { defineConfig } from 'umi';

import products from './src/config/products.json';
import categories from './src/config/category.json';

const allCategories: any = [];
const expendArray = (arr: any) => {
  arr.forEach((item: any) => {
    allCategories.push(item);

    if (item.children) {
      expendArray(item.children);
    }
  });
};
expendArray(categories);

const categoriesRoutes = allCategories.map((item: any) => ({
  path: `/category/${item.code}`,
  component: '@/pages/category/index',
  title: item.title,
}));

const productsRoutes = products.map((item) => ({
  path: `/product/${item.code}`,
  component: '@/pages/product/index',
  title: item.title,
  // exact: false,
}));

export default defineConfig({
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: '/docs',
  publicPath: '/',
  theme: {
    '@primary-color': '#1faead',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/index', title: 'holdoormedical' },
        {
          path: '/contact_us',
          component: '@/pages/contact/index',
          title: 'contact us',
        },
        {
          path: '/category/0',
          component: '@/pages/category/index',
          title: 'products',
        },
        ...categoriesRoutes,
        ...productsRoutes,
      ],
    },
  ],
  fastRefresh: {},
});
