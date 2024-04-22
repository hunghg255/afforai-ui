import React from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import classNames from 'classnames';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

import '@splidejs/react-splide/css';

const data = [
  {
    date: 'January 2023',
    text: 'Our story starts at Lawrence University in Wisconsin, US, where Alec & Hung studied together in Economics & Data + Computer Science. Whilst studying, we got quickly frustrated with how over-complicated & stretched out researching papers were, knowing there would be a better way, the idea of Afforai was born.',
    img: '/img/img5.png',
  },
  {
    date: 'March 2023',
    text: 'Afforai launched it’s first MVP to the the students of Lawrence University. We had a great response with 500 users immediately signing up (~50% of our college!) This made us realize that there was serious potential for Afforai. After graduating, we continued to grow Afforai out of out apartment to see how far it could go.',
    img: '/img/img6.png',
  },
  {
    date: 'July 2023',
    text: 'Afforai launched on Product Hunt, doubling the number of active users. Shortly after, Sputnik ATX reached out with an interest to invest in Afforai. Soon after, we boarded a flight from Wisconsin to Austin, Texas to further present Afforai to Sputnik ATX.  A make or break moment for the future of the company.',
    img: '/img/img7.png',
  },
  {
    date: 'August 2023',
    text: 'Sputnik invested $100,000. We moved our HQ from Wisconsin to Austin and worked with Sputnik to try out new strategies to grow Afforai.',
    img: '/img/img8.png',
  },
  {
    date: 'October 2023',
    text: 'We partnered up with the AppSumo team to launch on their platform. Spent 2 months preparing marketing assets, copywriting, doing user testing and refining the product, before launching on October 16, 2023.',
    img: '/img/img9.png',
  },
  {
    date: 'December 2023',
    text: 'We passed $500,000 in revenue, became one of AppSumo’s hottest products of 2023 & earned multiple badges for various reasons. A crazy year to say the least!',
    img: '/img/img10.png',
  },
];

const dataRow1 = [
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img11.png',
  },
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img12.png',
  },
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img13.png',
  },
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img14.png',
  },
];

const dataRow2 = [
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img15.png',
  },
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img16.png',
  },
  {
    text: 'Afforai T-shirt to wear for conferences & pitches!',
    img: '/img/img17.png',
  },
];

const dataRow3 = [...dataRow1, ...dataRow2];

const dataRow4 = [
  [
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img11.png',
    },
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img15.png',
    },
  ],
  [
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img12.png',
    },
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img16.png',
    },
  ],
  [
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img14.png',
    },
    {
      text: 'Afforai T-shirt to wear for conferences & pitches!',
      img: '/img/img17.png',
    },
  ],
];

const options = {
  rewind: true,
  type: 'loop',
  interval: 1500,
  perPage: 2,
  pagination: false,
  arrows: false,
  drag: 1,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
};

const Section2 = () => {
  return (
    <div className={styles.containerSection2}>
      <div className={styles.timeline}>
        {data.map((it, idx) => {
          return (
            <div key={`item-${idx}`} className={styles.timelineItem}>
              <div className={styles.content}>
                <Text element='h3' type='paragraph-medium-medium' color='gray-2'>
                  {it.date}
                </Text>

                <Text type='paragraph-medium-medium' color='gray-1' className={styles.desc}>
                  {it.text}
                </Text>
              </div>

              <img src={it.img} alt='' />
            </div>
          );
        })}
      </div>

      <div className={classNames(styles.timelineItem, styles.timelineItemSlide)}>
        <div className={styles.content}>
          <Text element='h3' type='paragraph-medium-medium' color='gray-2'>
            Present
          </Text>

          <Text type='paragraph-medium-medium' color='gray-1' className={styles.desc}>
            We’ve grown our team & continue to invest time, money & effort into Afforai, with
            excitement for what the future holds!
          </Text>
        </div>

        <div className={styles.cardDesktop}>
          <div className={styles.cardList}>
            {dataRow3.map((it, idx) => {
              return (
                <div key={`item-card-${idx}`} className={styles.card}>
                  <img src={it.img} alt='' />
                  <Text element='h3' type='paragraph-small-medium' color='gray-1'>
                    {it.text}
                  </Text>
                </div>
              );
            })}

            <div className={styles.cardLast}>
              <Icon icon='icon-book-open' className={styles.book} />
              <Text type='paragraph-large-medium' color='gray-2'>
                2024 {'->'} Onwards
              </Text>
              <Text type='heading-x-small-medium' color='gray-1'>
                More memories to be made...
              </Text>
            </div>
          </div>
        </div>

        <div className={styles.cardMobile}>
          <Splide
            aria-label='Book related'
            hasTrack={false}
            options={options as any}
            className={styles.splide}
          >
            <SplideTrack>
              {dataRow4.map((it, idx) => {
                return (
                  <SplideSlide key={`item-card-${idx}`}>
                    {it.map((v, idx) => {
                      return (
                        <div key={`item-slide-card-${idx}`} className={styles.card}>
                          <img src={v.img} alt='' />
                          <Text element='h3' type='paragraph-small-medium' color='gray-1'>
                            {v.text}
                          </Text>
                        </div>
                      );
                    })}
                  </SplideSlide>
                );
              })}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Section2;
