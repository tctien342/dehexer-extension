import { cx } from '@utils/tools';
import { useMemo } from 'react';

import { BookmarkBtn } from './BookmarkBtn';
import { CopyBtn } from './CopyBtn';
import styles from './index.module.scss';
import { PrivateBtn } from './PrivateBtn';
import { ToHexBtn } from './ToHexBtn';

interface ITooltipProps {
  mode: 'encode' | 'decode';
  rawContent: string;
}
export const Tooltip: IComponent<ITooltipProps> = ({ mode, rawContent }) => {
  // Parsing rawHexString into content
  const content = useMemo(() => {
    switch (mode) {
      case 'decode': {
        const cleanRaw = rawContent.replace(/\s/g, '');
        const computeArr: string[] = [];
        for (let i = 0; i < cleanRaw.length; i += 2) {
          computeArr.push(cleanRaw.slice(i, i + 2));
        }
        return computeArr
          .map((hex) => {
            if (hex === '00') return ' ';
            return String.fromCharCode(parseInt(hex, 16));
          })
          .join('');
      }
      default: {
        return '';
      }
    }
  }, [mode, rawContent]);

  return (
    <div
      className={styles.pop}
      style={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '4px',
        background: '#1E1E21',
        color: 'white',
      }}>
      <div className={styles.container}>
        {mode === 'decode' && (
          <>
            <span className={styles.text}>{content}</span>
            <div className={styles['btn-container']}>
              <CopyBtn text={content} />
              <PrivateBtn text={content} />
              <BookmarkBtn text={content} />
            </div>
          </>
        )}
        {mode === 'encode' && (
          <>
            <ToHexBtn text={rawContent} />
            <PrivateBtn text={rawContent} />
          </>
        )}
      </div>
    </div>
  );
};
