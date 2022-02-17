import React, { useContext } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import { LoaderDiv, LoaderWrapper } from './Loader.styled';

const Loader = ({ small = false }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <LoaderWrapper data-testid="loaderWrapper" mobile={isMobile}>
      <LoaderDiv data-testid="loader" small={small} />
    </LoaderWrapper>
  );
};

export default Loader;
