import React, { useContext } from 'react';
import wrapper from './LoaderWrapper.module.css';
import classes from './Loader.module.css';
import { MediaContext } from '../../store/contexts/MediaContext';

const Loader = ({ small = false }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div
      data-testid="loaderWrapper"
      className={isMobile ? `${wrapper.loaderWrapper} ${wrapper.loaderWrapperMobile}` : `${wrapper.loaderWrapper}`}
    >
      <div data-testid="loader" className={small ? `${classes.loader} ${classes.loaderSmall}` : classes.loader} />
    </div>
  );
};

export default Loader;
