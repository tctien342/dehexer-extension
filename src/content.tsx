/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './content.scss';
import '@utils/prototype';

import { Tooltip } from '@components/Tooltip';
import { createRoot, Root } from 'react-dom/client';

/**
 * Decalre global variable
 */
let root: Root;
let div: HTMLDivElement;
let isHovering = false;

/**
 * Receive message from background or popup
 * @param event Message from background or popup script
 */
const contentEventHandle = (event: { from: string; action: string; data: any }) => {
  console.log('<i> Incoming event from:', event.from, ' - action:', event.action);
  switch (event.action) {
    // TODO: Handle event for contentJS
    default: {
      return true;
    }
  }
};

// Start scripts after setting up the connection
chrome.runtime.onConnect.addListener((eventPort) => {
  // Listen for popup or background messenger
  eventPort.onMessage.addListener(contentEventHandle);
  // Set listener for disconnection (aka. popup closed)
  eventPort.onDisconnect.addListener(() => {
    console.log('<i> Content.js - disconnected');
  });
});

/**
 * Detect on mouse selected text
 */
document.addEventListener('mouseup', () => {
  processSelection();
});

/**
 * Detect on keyboard selected text
 */
document.addEventListener('keyup', (ev) => {
  if (ev.shiftKey || ev.metaKey || ev.ctrlKey || ev.key === 'Meta' || ev.key === 'Control') {
    processSelection();
  }
});

document.addEventListener(
  'scroll',
  () => {
    root?.unmount();
  },
  true
);

const processSelection = () => {
  try {
    /**
     * Prevent unmount while hover popup
     */
    if (isHovering) {
      return;
    }

    /**
     * Unmount current popup and get new selection
     */
    root?.unmount();
    const selection = document.getSelection();
    const selectedText = selection?.toString().trim() ?? '';

    if (selection && selectedText.length > 6 && (selectedText?.isSHex() || selectedText?.isURL())) {
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      if (!div) {
        div = document.createElement('div');
        document.body.appendChild(div);
        div.onpointerenter = () => (isHovering = true);
        div.onpointerleave = () => (isHovering = false);
      }
      div.style.position = 'fixed';
      div.style.top = `calc(${rect.top}px - 48px)`;
      div.style.left = `calc(${rect.left}px + calc(${rect.width}px / 2) - 40px)`;

      /**
       * Render tooltip with react
       */
      root = createRoot(div);
      root.render(
        <Tooltip mode={selectedText.isURL() ? 'encode' : 'decode'} rawContent={selectedText} />
      );
    }
  } catch (e) {}
};
