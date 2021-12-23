import styles from './index.less';
import SubHeader from '../../layouts/sub-header';
import Contact from './contact';

export default function ContactPage() {
  return (
    <div className={styles.contact_us}>
      <SubHeader showBack={false} title="Contact" />
      <section className={styles.topic}>
        <h2>Get in touch with us</h2>
      </section>
      <div className={styles.wrap}>
        <div>
          <div className={styles.company}>Ningbo Holdoor Medical Co., Ltd</div>
          <Contact size="big" />
        </div>
      </div>
    </div>
  );
}
