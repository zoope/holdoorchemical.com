import React, { useState } from 'react';
import products from '../config/products.json';
import categories from '../config/category.json';
import { Menu } from 'antd';
import { history } from 'umi';

import style from './index.less';

const productsCfg = {};
products.forEach((item) => {
  // @ts-ignore
  productsCfg[item.code] = item;
});

const categoryCfg: any = {};
const expendArray = (arr: any, parent?: any) => {
  arr.forEach((item: any) => {
    if (parent) {
      if (parent.parent) {
        item.parent = [...parent.parent, parent];
      } else {
        item.parent = [parent];
      }
    }
    categoryCfg[item.code] = item;

    if (item.children) {
      expendArray(item.children, item);
    }
  });
};
expendArray(categories);

// @ts-ignore
window.products = products;
// @ts-ignore
window.productsCfg = productsCfg;
// @ts-ignore
window.categoryCfg = categoryCfg;

export default (props: any) => {
  const { pathname } = props.location;
  const categoryCode = pathname.match(/\/category\/([\d]*)/)?.[1];

  const [headerActive, setHeaderActive] = useState(false);

  const pushRoute = (path: string) => history.push(path);
  return (
    <>
      <header className={`${style.header} ${headerActive ? style.active : ''}`}>
        <div className={style.container}>
          <div className={style.logo}>
            <img src="/images/icon/logo.png" alt="" />
            <span>Holdoor Chemical</span>
          </div>
          <Menu
            mode="horizontal"
            className={style.menu}
            selectedKeys={[props.location.pathname]}
            onMouseEnter={() => setHeaderActive(true)}
            onMouseLeave={() => setHeaderActive(false)}
          >
            <Menu.Item key="/" onClick={() => pushRoute('/')}>
              HOME
            </Menu.Item>
            {categories[0].children.map((category) => (
              <Menu.Item
                key={`/category/${category.code}`}
                onClick={() => pushRoute(`/category/${category.code}`)}
              >
                {category.title}
              </Menu.Item>
            ))}
            <Menu.Item
              key="/contact_us"
              onClick={() => pushRoute('/contact_us')}
            >
              CONTACT
            </Menu.Item>
          </Menu>
        </div>
      </header>
      <div className={style['content-wrap']}>{props.children}</div>
      <footer className={style.footer}>
        <div className={style.container}>
          <span>HOLDOOR CHEMICAL 2021</span>
        </div>
      </footer>
    </>
  );
};
