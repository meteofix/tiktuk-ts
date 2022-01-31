import React, { useContext } from 'react';
import classes from './Counter.module.css';
import CountRound from '../../../utils/countRound';
import { MediaContext } from '../../../store/contexts/MediaContext';

const Counter = ({ title, count }) => {
  const { isMobile } = useContext(MediaContext);
  return (
    <div data-testid="number" className={isMobile ? `${classes.number} ${classes.numberMobile}` : classes.number}>
      <strong title={title}>{CountRound(count)}</strong>
      <span data-testid="unit" className={isMobile ? `${classes.unit} ${classes.unitMobile}` : classes.unit}>
        {title}
      </span>
    </div>
  );
};

export default Counter;
