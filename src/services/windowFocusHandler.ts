import {useEffect} from 'react';

type WindowFocusHandlerProps = {
  onFocus: EventListenerOrEventListenerObject,
  onBlur: EventListenerOrEventListenerObject
}

const WindowFocusHandler = ({ onFocus, onBlur }: WindowFocusHandlerProps): void => {
  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  });
};

export default WindowFocusHandler;
