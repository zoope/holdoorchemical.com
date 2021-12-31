import { Fragment } from 'react';
import styles from './index.less';
import { history } from 'umi';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router';

export default withRouter(function SubHeader({
  title,
  showBack = true,
  type = 'products',
  ...others
}) {
  const handleBack = () => {
    history.goBack();
  };
  const breadcrumbs = () => {
    const {
      location: { pathname },
    } = others;
    let arr = [];
    const productsCfg = window.productsCfg;
    const categoryCfg = window.categoryCfg;

    const productCode = pathname.match(/\/product\/([\d]*)/)?.[1];
    const categoryCode = pathname.match(/\/category\/([\d]*)/)?.[1];

    if (productCode) {
      const category = productsCfg[productCode].category;
      arr = productsCfg[productCode].category.map((code) => ({
        name: categoryCfg[code].title,
        path: `/category/${categoryCfg[code].code}`,
      }));
    }
    if (categoryCode) {
      if (categoryCfg[categoryCode].parent) {
        arr = categoryCfg[categoryCode].parent.map((category) => ({
          name: category.title,
          path: `/category/${category.code}`,
        }));
      }
    }

    return arr.map((item, index) => {
      return (
        <Breadcrumb.Item key={index}>
          <a href={item.path}>{item.name}</a>
        </Breadcrumb.Item>
      );
    });
  };

  const bgConfig = {
    products: 'banner_0',
    contact: 'banner_1',
  };

  return (
    <Fragment>
      <section
        className={styles.top}
        style={{ backgroundImage: `url(/images/icon/${bgConfig[type]}.png)` }}
      >
        <div className={styles.content}>
          <h1>{title}</h1>
          {showBack && (
            <div className={styles.back} onClick={handleBack}>
              RETURN
            </div>
          )}
        </div>
      </section>
      <section className={styles.breadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          {breadcrumbs()}
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </section>
    </Fragment>
  );
});
