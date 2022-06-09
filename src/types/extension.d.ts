type TEventFrom = 'background' | 'content' | 'popup';
type TEventAction = 'OPEN_PRIVATE_LINK';

interface IExtensionEvent<F extends TEventFrom, A extends TEventAction, T> {
  from: F;
  action: A;
  data: T;
}

type TEventOpenPrivate = IExtensionEvent<'content', 'OPEN_PRIVATE_LINK', { url: string }>;

type TExensionEvent = TEventOpenPrivate;
