interface ISvgComponentProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  viewBox?: string;
  opacity?: string | number;
  className?: string;
}

interface IComponent<T = {}> extends React.FC<React.PropsWithChildren<T>> {}

interface IScreenComponent<T = {}> extends IComponent<T> {
  getLayout?: TGetLayout;
}

interface ISvgComponent<T = {}> extends IComponent<ISvgComponentProps & T> {}

declare interface String {
  /**
   * Get domain from an URL string
   */
  domain(): string;
  /**
   * Return true if string is an valid URL
   */
  isURL(): boolean;

  /**
   * Detect if string is Hex with space and two char
   */
  isSHex(): boolean;

  /**
   * Convert current string into hex
   */
  toSHex(): string;
}
