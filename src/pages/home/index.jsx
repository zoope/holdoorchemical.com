import homeCfg from '@/config/home.json';
import categories from '@/config/category.json';
import { history } from 'umi';
import React from 'react';
import { Carousel } from 'antd';

import style from './index.less';

export default function Homepage() {
  const categoryCfg = categories[0].children;

  const CarouselRef = React.useRef();
  const next = () => {
    CarouselRef.current.next();
  };
  const prev = () => {
    CarouselRef.current.prev();
  };

  return (
    <div>
      <section className={style.banner}>
        <div className={style.carousel}>
          <span className={style['left-arrow']} onClick={prev}></span>
          <span className={style['right-arrow']} onClick={next}></span>
          <Carousel
            autoplay
            autoplaySpeed={5000}
            ref={CarouselRef}
            effect="fade"
          >
            {homeCfg.banner.map((item, index) => (
              <div
                className={`${style.item} ${style['banner-' + index]}`}
                key={index}
              >
                <div className={style.wrap}>
                  <h3>{item.text}</h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className={style.contact}>
        <div className={style.container}>
          <div>
            We provide high quality chemical worldwide.{' '}
            <a href="/category/0">more</a>
          </div>
          <div>
            Have a question? Call us today!
            <br />
            <a href="tel:+8613245638872">+86 13245638872</a>
          </div>
          <div>
            Need support? Send us an E-mail
            <br />
            <a href="mailto:sales@holdoorchemical.com">
              sales@holdoorchemical.com
            </a>
          </div>
        </div>
      </section>
      <section className={style.aboutus}>
        <h2>About Us</h2>
        <p>
          Ningbo Holdoor Chemical Co., Ltd Is a professional chemical supplier,
          our products include silicones, textile auxiliaries, surfactants, etc.
          <br />
          Founded in 2010,we growing rapidly in the past 10 years. In addition
          to the Ningbo headquarters, we have offices, factory as well as
          warehouses in Guangzhou, Shanghai and Jiangsu.
          <br />
          Our international business started in 2019 and now we have partners in
          21 contries. We are doing our best to bring better chemical solutions
          to more customers through our professional services and high-quality
          products.
        </p>
      </section>
    </div>
  );
}
