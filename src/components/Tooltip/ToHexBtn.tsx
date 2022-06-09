import { cx } from '@utils/tools';
import { useState } from 'react';

import styles from './index.module.scss';

export const ToHexBtn: IComponent<{ text: string }> = ({ text }) => {
  const [hexed, setHexed] = useState(false);

  const onConvert = () => {
    void navigator.clipboard.writeText(text.toSHex()).then(() => {
      setHexed(true);
    });
  };

  return (
    <button
      onClick={onConvert}
      className={cx(styles.btn, styles.tooltip, {
        [styles.white]: !hexed,
        [styles.green]: hexed,
      })}>
      {!hexed && (
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      )}
      {hexed && (
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
      <span className={styles.tooltiptext}>Copy Hex</span>
    </button>
  );
};
