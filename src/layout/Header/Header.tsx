import React, { useState } from 'react';

import classNames from 'classnames';
import { Drawer } from 'vaul';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header>
        <div className={styles.containerHeader}>
          <img src='/svg/logo2.svg' alt='Logo' />

          <nav className={styles.nav}>
            <ul>
              <li>
                <a href='#'>
                  <Text>Affiliate</Text>
                </a>
              </li>
              <li>
                <a href='#'>
                  <Text>Pricing</Text>
                </a>
              </li>
              <li>
                <a href='#'>
                  <Text>Help Center</Text>
                </a>
              </li>
              <li>
                <a href='#'>
                  <Text>Blog</Text>
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.btnLogin}>
            <ul>
              <li>
                <a href='#' className={styles.login}>
                  <Text type='paragraph-small-medium' color='gray-1'>
                    Log in
                  </Text>
                </a>
              </li>
              <li>
                <a href='#' className={styles.tryFree}>
                  <Text type='paragraph-small-medium' color='gray-3'>
                    Try for free
                  </Text>
                </a>
              </li>
            </ul>
          </div>

          <Drawer.Root open={visible} onOpenChange={setVisible}>
            <Drawer.Trigger asChild>
              <button className={styles.btnMenu}>
                <Icon icon='icon-menu' />
              </button>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Overlay className={styles.overlay} />
              <Drawer.Content className={styles.contentDraw}>
                <div className={styles.contentWrap}>
                  <div className={styles.line} />
                  <div className={styles.content}>
                    <nav className={classNames(styles.nav, styles.navMobile)}>
                      <ul>
                        <li>
                          <a href='#'>
                            <Text>Affiliate</Text>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <Text>Pricing</Text>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <Text>Help Center</Text>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <Text>Blog</Text>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div className={classNames(styles.btnLogin, styles.btnLoginMobile)}>
                      <ul>
                        <li>
                          <a href='#' className={styles.login}>
                            <Text type='paragraph-small-medium' color='gray-1'>
                              Log in
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href='#' className={styles.tryFree}>
                            <Text type='paragraph-small-medium' color='gray-3'>
                              Try for free
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </header>
    </>
  );
};

export default Header;
