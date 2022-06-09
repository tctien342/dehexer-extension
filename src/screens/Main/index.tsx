import './index.scss';

import { Switcher } from '@components/Switcher';
import { CopyBtn } from '@components/Tooltip/CopyBtn';
import { PrivateBtn } from '@components/Tooltip/PrivateBtn';
import { Switch, Tab } from '@headlessui/react';
import { cx } from '@utils/tools';
import { useMemo, useState } from 'react';

function MainScreen() {
  const [showForHex, setShowForHex] = useState(true);
  const [showDecoded, setShowDecoded] = useState(true);
  const [showForUrl, setShowForUrl] = useState(true);

  const handlePressHexTooltip = () => setShowForHex((prev) => !prev);
  const handlePressUrlTooltip = () => setShowForUrl((prev) => !prev);
  const handlePressDecodedTooltip = () => setShowDecoded((prev) => !prev);

  const renderTab = useMemo(() => {
    return ['SETTING', 'BOOKMARK'].map((category) => (
      <Tab
        key={category}
        className={({ selected }) =>
          cx(
            'w-full rounded py-1 px-1 text-xs leading-1 flex justify-center',
            'focus:outline-none focus:ring-0',
            selected
              ? 'bg-green-400 shadow shadow-green-400 font-bold text-white'
              : 'text-gray hover:bg-white/[0.12] hover:text-white'
          )
        }>
        {category === 'SETTING' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        {category === 'BOOKMARK' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
      </Tab>
    ));
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full p-3">
          <div className="flex w-full">
            <span
              className="font-bold text-xs text-gray-400 flex-auto"
              style={{ letterSpacing: 8 }}>
              DEHEXER
            </span>
            <span className="font-bold text-xs text-gray-300">VERSION 1.0</span>
          </div>
          <div className="mt-2 relative rounded-md w-full h-24 bg-green-400 shadow-lg shadow-green-400 flex flex-row justify-center items-center p-4 text-white overflow-hidden">
            <div className="flex flex-col">
              <span className="font-bold text-xs">TOTAL DECODED</span>
              <span className="text-4xl drop-shadow-lg">32,000</span>
            </div>
            <div className="flex-auto flex justify-end items-center">
              <img
                alt="icon"
                height={48}
                width={48}
                src="./encode.png"
                className="absolute shadow z-10"
              />
              <svg
                className="animate-spin -ml-1 mr-3 text-white absolute"
                xmlns="http://www.w3.org/2000/svg"
                style={{ top: -90, right: -100, zIndex: 1, animationDuration: '3.14s' }}
                height={200}
                width={200}
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex-auto bg-zinc-50 w-full shadow-inner p-3 flex flex-col">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded bg-zinc-100 p-2 shadow-inner">
              {renderTab}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-2">
                  <span className="font-bold text-gray-500 text-sm">CONFIGURATION</span>
                  <Switcher
                    title="Show tooltip for hex code"
                    toggled={showForHex}
                    onToggled={handlePressHexTooltip}
                  />
                  <Switcher
                    title="Show tooltip for URL"
                    toggled={showForUrl}
                    onToggled={handlePressUrlTooltip}
                  />
                  <Switcher
                    title="Show decoded content"
                    toggled={showDecoded}
                    onToggled={handlePressDecodedTooltip}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="mt-2">
                  <span className="font-bold text-gray-500 text-sm">BOOKMARK</span>
                  <ul className="bg-white rounded-md p-1 shadow-md mt-1">
                    <li className="relative rounded-md p-3 hover:bg-gray-100 flex flex-row">
                      <div className="flex-auto">
                        <h3 className="text-sm font-medium leading-5 text-gray-500">
                          Caox Yeu Cho Meo
                        </h3>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>5h ago</li>
                          <li>&middot;</li>
                          <li>************************</li>
                        </ul>
                      </div>
                      <div
                        style={{ fontSize: 12 }}
                        className="flex items-center justify-center text-zinc-500">
                        <CopyBtn text="123" />
                        <PrivateBtn text="123" />
                      </div>
                    </li>
                    <li className="relative rounded-md p-3 hover:bg-gray-100 flex flex-row">
                      <div className="flex-auto">
                        <h3 className="text-sm font-medium leading-5 text-gray-500">
                          Caox Yeu Cho Meo
                        </h3>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>5h ago</li>
                          <li>&middot;</li>
                          <li>************************</li>
                        </ul>
                      </div>
                      <div
                        style={{ fontSize: 12 }}
                        className="flex items-center justify-center text-zinc-500">
                        <CopyBtn text="123" />
                        <PrivateBtn text="123" />
                      </div>
                    </li>
                    <li className="relative rounded-md p-3 hover:bg-gray-100 flex flex-row">
                      <div className="flex-auto">
                        <h3 className="text-sm font-medium leading-5 text-gray-500">
                          Caox Yeu Cho Meo
                        </h3>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>5h ago</li>
                          <li>&middot;</li>
                          <li>************************</li>
                        </ul>
                      </div>
                      <div
                        style={{ fontSize: 12 }}
                        className="flex items-center justify-center text-zinc-500">
                        <CopyBtn text="123" />
                        <PrivateBtn text="123" />
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export { MainScreen };
