import { Switch } from '@headlessui/react';

export const Switcher: IComponent<{
  toggled: boolean;
  onToggled: () => void;
  title: string;
}> = ({ title, toggled, onToggled }) => {
  return (
    <div className="flex items-center mt-2">
      <Switch
        checked={toggled}
        onChange={onToggled}
        className={`${
          toggled ? 'bg-green-400 shadow-md shadow-green-400' : 'bg-gray-200'
        } relative inline-flex h-5 w-9 items-center rounded-full transition-all duration-300`}>
        <span className="sr-only">{title}</span>
        <span
          className={`${
            toggled ? 'translate-x-5' : 'translate-x-1'
          } inline-block h-3 w-3 transform transition ease-in-out rounded-full bg-white`}
        />
      </Switch>
      <span className="ml-2 text-sm">{title}</span>
    </div>
  );
};
