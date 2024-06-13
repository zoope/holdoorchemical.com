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
            <a href="mailto:holdoor@foxmail.com">
              holdoor@foxmail.com
            </a>
          </div>
        </div>
      </section>
      <section className={style.aboutus}>
        <h2>About Us</h2>
        <p>
          Founded in 2010, Ningbo Holdoor chemical has led the steady growth based on its integrity and hard work.
          <br />
          At holdoor chemicals, we take pride in offering an extensive selection of silicone and surfactant,
          <br />
          including silicone fluid, emulsion, defoamer, softener, and various kinds of surfactant.
          <br />
          Over the years, Holdoor Chemical has continued to innovate and optimize its products.
          <br />
          It now has a complete production, warehousing, distribution center, after-sales and technical support platform. 
          <br />
          We are dedicated to teailor our products to meet your unique application needs.
        </p>
      </section>
    </div>
  );
}
