import styles from './index.less';
import { history } from 'umi';
import SubHeader from '../../layouts/sub-header';
// import Contact from '../contact/contact';

export default function Product(props) {
  const {
    location: { pathname },
  } = props;

  const productCode = pathname.match(/\/product\/([\d]*)/)?.[1];
  const productData = window.productsCfg[productCode];

  return (
    <div>
      <SubHeader title={productData.title} />
      <div className={styles.main}>
        {/* <section className={styles['left-side']}>
          <div className={styles.title}>Contact us</div>
          <Contact />
        </section> */}
        <section className={styles.product}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${productData.avatar})` }}
          />
          <div className={styles.text}>
            <div className={styles.title}>{productData.title}</div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: productData.content }}
            ></div>
          </div>
        </section>
      </div>
    </div>
  );
}
