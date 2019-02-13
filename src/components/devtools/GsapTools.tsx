import * as React from 'react';
import GsapDevTools from 'gsap-tools';

import { useKeyDown } from 'hooks/use-keydown';

import s from './GsapTools.scss';

interface IProps {
  button: boolean;
}

const LOCAL_STORAGE_GSAPTOOLS = '_uenoDevtoolsGsapTools';

export const GsapTools = ({ button }: IProps) => {
  const [visible, setVisible] = React.useState(false);
  const keys = useKeyDown();

  const onToggleGsapTools = () => {
    setVisible(!visible);
    localStorage.setItem(LOCAL_STORAGE_GSAPTOOLS, String(!visible));
  };

  React.useEffect(() => {
    const isVisible = localStorage.getItem(LOCAL_STORAGE_GSAPTOOLS) === 'true';

    setVisible(isVisible);
  }, []);

  React.useEffect(() => {
    if (keys.includes(17) && keys.includes(71)) {
      onToggleGsapTools();
    }
  }, [keys]);

  return (
    <>
      {button && (
        <button className={s(s.button, { visible })} onClick={onToggleGsapTools}>
          GSAP
        </button>
      )}

      <GsapDevTools
        onClick={onToggleGsapTools}
        isVisible={visible}
        isFixed
      />
    </>
  );
};
