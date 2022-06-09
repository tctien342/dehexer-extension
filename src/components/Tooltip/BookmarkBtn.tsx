import { cx } from '@utils/tools';
import { useState } from 'react';

import styles from './index.module.scss';

export const BookmarkBtn: IComponent<{ text: string }> = ({ text }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const onBookmark = () => {
    void navigator.clipboard.writeText(text).then(() => {
      setBookmarked(true);
    });
  };

  return (
    <button
      onClick={onBookmark}
      className={cx(styles.btn, styles.tooltip, {
        [styles.white]: !bookmarked,
        [styles.green]: bookmarked,
      })}>
      {!bookmarked && (
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
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )}
      {bookmarked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          fill="#EBB72F"
          viewBox="0 0 24 24"
          stroke="#EBB72F"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )}
      <span className={styles.tooltiptext}>Bookmark</span>
    </button>
  );
};
