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
        <div className={style.bg}></div>
        <div className={style.carousel}>
          <span className={style['left-arrow']} onClick={prev}></span>
          <span className={style['right-arrow']} onClick={next}></span>
          <Carousel autoplay autoplaySpeed={5000} ref={CarouselRef}>
            {homeCfg.banner.map((item, index) => (
              <div className={style.item} key={index}>
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
            We provide high quality medical instruments worldwide.{' '}
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
            <a href="mailto:sales@holdoormedical.com">
              sales@holdoormedical.com
            </a>
          </div>
        </div>
      </section>
      <section className={style.category}>
        {categoryCfg.map((item, index) => (
          <a
            className={style.item}
            key={index}
            onClick={() => history.push(`/category/${item.code}`)}
          >
            <div className={style.img}>
              <img src={item.image} />
            </div>
            <div className={style.title} style={{ color: item.color }}>
              {item.title}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
