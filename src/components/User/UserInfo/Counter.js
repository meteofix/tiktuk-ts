import React, { useContext } from 'react';
import CountRound from '../../../utils/countRound';
import { MediaContext } from '../../../store/contexts/MediaContext';
import { Count, Unit } from './Counter.styled';

const Counter = ({ title, count }) => {
  const { isMobile } = useContext(MediaContext);
  return (
    <Count data-testid="count" mobile={isMobile}>
      <strong title={title}>{CountRound(count)}</strong>
      <Unit data-testid="unit" mobile={isMobile}>
        {title}
      </Unit>
    </Count>
  );
};

export default Counter;
