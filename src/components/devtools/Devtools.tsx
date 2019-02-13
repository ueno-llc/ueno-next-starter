import * as React from 'react';

import { useKeyDown } from 'hooks/use-keydown';

import { GridOverlay } from './GridOverlay';
import { GsapTools } from './GsapTools';

const LOCAL_STORAGE_KEY_VISIBLE = '_uenoDevtoolsVisible';

export const Devtools = () => {
  const [visible, setVisible] = React.useState(false);
  const keys = useKeyDown();

  const onToggleDisplay = () => {
    setVisible(!visible);
    localStorage.setItem(LOCAL_STORAGE_KEY_VISIBLE, String(!visible));
  };

  React.useEffect(() => {
    const isVisible = localStorage.getItem(LOCAL_STORAGE_KEY_VISIBLE) === 'true';

    setVisible(isVisible);

    if (keys.includes(17) && keys.includes(75)) {
      onToggleDisplay();
    }
  }, [keys]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <GridOverlay button={visible} columns={12} />
      <GsapTools button={visible} />
    </>
  );
};
