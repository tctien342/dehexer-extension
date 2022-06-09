import { cx } from '@utils/tools';
import { useState } from 'react';

import styles from './index.module.scss';

export const CopyBtn: IComponent<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
    });
  };

  return (
    <button
      onClick={onCopy}
      className={cx(styles.btn, styles.tooltip, {
        [styles.white]: !copied,
        [styles.green]: copied,
      })}>
      {!copied && (
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
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
      {copied && (
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
      <span className={styles.tooltiptext}>Copy</span>
    </button>
  );
};
