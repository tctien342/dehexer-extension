const openPrivateTab = (url: string) => {
  return chrome.runtime.sendMessage<TEventOpenPrivate>({
    from: 'content',
    action: 'OPEN_PRIVATE_LINK',
    data: { url: url },
  });
};

export { openPrivateTab };
