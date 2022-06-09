import { openPrivateTab } from '@utils/extension';
import { cx } from '@utils/tools';
import { useState } from 'react';

import styles from './index.module.scss';

export const PrivateBtn: IComponent<{ text: string }> = ({ text }) => {
  const [opened, setOpened] = useState(false);

  const onOpen = () => {
    void openPrivateTab(text).then(() => setOpened(true));
  };

  return (
    <button
      onClick={onOpen}
      className={cx(styles.btn, styles.tooltip, {
        [styles.white]: !opened,
        [styles.green]: opened,
      })}>
      {!opened && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      )}
      {opened && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="18px"
          width="18px"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
      <span className={styles.tooltiptext}>Incognito</span>
    </button>
  );
};
