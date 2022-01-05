import { history } from 'umi';
import SubHeader from '../../layouts/sub-header';
import styles from './index.less';
import Contact from '../contact/contact';

export default function CategoryPage(props) {
  const {
    location: { pathname },
  } = props;

  const categoryCode = pathname.match(/\/category\/([\d]*)/)?.[1];
  const categoryData = window.categoryCfg[categoryCode];

  const products = window.products;

  const productList = products.filter((product) =>
    product.category.includes(categoryCode),
  );

  const renderProducts = () => {
    return productList.map((item) => (
      <a
        href={`/product/${item.code}`}
        className={styles.product}
        key={item.code}
      >
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${item.avatar})` }}
        />
        <div className={styles.name}>{item.title}</div>
      </a>
    ));
  };
  return (
    <div>
      <SubHeader title={categoryData.title} />
      <div className={styles.content}>
        <section className={styles['left-side']}>
          <div>
            <div className={styles.title}>Contact us</div>
            <Contact />
          </div>
        </section>
        <section className={styles['product-list']}>
          <div className={styles.title}>{categoryData.title}</div>
          {renderProducts()}
        </section>
      </div>
    </div>
  );
}
