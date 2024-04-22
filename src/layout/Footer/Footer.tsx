import React from 'react';

import Select from 'rc-select';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.box1}>
          <img src='/svg/logo2.svg' alt='' />

          <div>
            <Select
              style={{
                width: 147,
              }}
              suffixIcon={<Icon icon='icon-angle-down' />}
              defaultValue='en'
              options={[
                { value: 'en', label: 'English' },
                { value: 'vi', label: 'Vietnamese' },
              ]}
            />
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.subBox1}>
            <div className={styles.menu1}>
              <Text className={styles.title}>Company</Text>
              <a href='#' className={styles.link}>
                <Text>Our Story</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Affiliate Program</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Roadmap</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Pricing</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Blog</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Contact us</Text>
              </a>
            </div>

            <div className={styles.menu2}>
              <Text className={styles.title}>Resources</Text>
              <a href='#' className={styles.link}>
                <Text>Research Community</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Help Center</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>API Documentation </Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Security</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Terms</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Privacy </Text>
              </a>
            </div>

            <div className={styles.menu3}>
              <Text className={styles.title}>Compare</Text>
              <a href='#' className={styles.link}>
                <Text>Elicit.ai Alternative</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Consensus Alternative</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>ChatPDF Alternative</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>PDF.ai Alternative</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>Humata.ai Alternative</Text>
              </a>
              <a href='#' className={styles.link}>
                <Text>More Comparisons</Text>
              </a>
            </div>
          </div>

          <div className={styles.copyright}>
            <Text>Copyright ©2023 Afforai inc.️</Text>
            <div className={styles.socials}>
              <a href='#'>
                <Icon icon='icon-linkin' />
              </a>
              <a href='#'>
                <Icon icon='icon-youtube' />
              </a>
              <a href='#'>
                <Icon icon='icon-tiktok' />
              </a>
              <a href='#'>
                <Icon icon='icon-x' />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <Text>Afforai is backed by</Text>
        </div>

        <div className={styles.orgs}>
          <a href='#'>
            <img src='/img/img24.png' />
          </a>
          <a href='#'>
            <img src='/img/img25.png' />
          </a>
          <a href='#'>
            <img src='/img/img26.png' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
