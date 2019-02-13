import * as React from 'react';

export const useKeyDown = () => {
  const [keys, setKeys] = React.useState<number[]>([]);

  const handleKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keys.includes(keyCode)) {
      return;
    }

    setKeys([...keys, keyCode]);
  };

  const handleKeyUp = ({ keyCode }: KeyboardEvent) => {
    const index = keys.indexOf(keyCode, 0);

    if (index > -1) {
      keys.splice(index, 1);
    }

    setKeys(keys);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [keys]);

  return keys;
};
