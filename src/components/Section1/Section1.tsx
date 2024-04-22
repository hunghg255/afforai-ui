import React from 'react';

import Text from '@/components/UI/Text';

import styles from './index.module.scss';

const Section1 = () => {
  return (
    <div className={styles.containerSection1}>
      <div className={styles.box1}>
        <div className={styles.subBox1}>
          <div className={styles.textBox1}>
            <Text type='heading-large-semi-bold' className={styles.text1}>
              2023
            </Text>
            <Text type='paragraph-medium-medium' color='gray-2'>
              Afforai launched
            </Text>
          </div>

          <div className={styles.rocket}>
            <img src='/img/rocket.png' alt='' />
          </div>
        </div>

        <div className={styles.subBox2}>
          <div className={styles.img1}>
            <img src='/img/img1.png' alt='' />
          </div>

          <div className={styles.img2}>
            <img src='/img/img2.png' alt='' />
          </div>
        </div>
      </div>

      <div className={styles.box2}>
        <Text type='heading-large-semi-bold' color='gray-1'>
          Accelerate the world’s research one reference at a time.
        </Text>
      </div>

      <div className={styles.box3}>
        <div className={styles.box3Sub1}>
          <div className={styles.subbox3_1}>
            <img src='/img/img3.png' alt='' />
          </div>
          <div className={styles.subbox3_2}>
            <img src='/img/img4.png' alt='' />
          </div>
        </div>
        <div className={styles.subbox3_3}>
          <Text type='heading-large-semi-bold' className={styles.text1}>
            $700,000+
          </Text>
          <Text type='paragraph-medium-medium' color='gray-2'>
            Raised in captial
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Section1;
