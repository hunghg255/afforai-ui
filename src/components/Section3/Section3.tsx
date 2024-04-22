import React from 'react';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

const Section3 = () => {
  return (
    <div
      className={styles.containerSection3}
      style={{
        backgroundImage: 'url(/img/bg1.png)',
      }}
    >
      <div className={styles.content}>
        <img src='/svg/afforai-logo.svg' className={styles.logo} />
        <Text type='heading-medium-semi-bold' color='gray-1'>
          Become a part of the story
        </Text>
        <Text type='heading-x-small-medium' color='gray-2' className={styles.desc}>
          Apply to become a part of the beautiful story we are building here at Afforai.
        </Text>
        <button className={styles.btn}>
          <Text type='paragraph-medium-medium' color='gray-3'>
            Apply now
          </Text>
          <Icon
            icon='icon-angle-right'
            style={{
              fontSize: 16,
              color: '#FCFCFD',
            }}
          />
        </button>
      </div>

      <img src='/img/img18.png' className={styles.imgLeft1} />
      <img src='/img/img19.png' className={styles.imgLeft2} />
      <img src='/img/img20.png' className={styles.imgLeft3} />

      <img src='/img/img21.png' className={styles.imgRight1} />
      <img src='/img/img22.png' className={styles.imgRight2} />
      <img src='/img/img23.png' className={styles.imgRight3} />
    </div>
  );
};

export default Section3;
