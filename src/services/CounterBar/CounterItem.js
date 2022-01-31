import React, { useContext } from 'react';
import classes from './CounterItem.module.css';
import LikeIcon from '../../UI/icons/CounterBar/LikeIcon';
import CommentIcon from '../../UI/icons/CounterBar/CommentIcon';
import ShareIcon from '../../UI/icons/CounterBar/ShareIcon';
import CountRound from '../../utils/countRound';
import { MediaContext } from '../../store/contexts/MediaContext';

const CounterItem = ({ count, type }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div className={classes.barItemWrapper}>
      <div
        data-testid="barItemImg"
        className={isMobile ? `${classes.barItemImg} ${classes.barItemImgMobile}` : classes.barItemImg}
      >
        {type === 'like' && <LikeIcon />}
        {type === 'comment' && <CommentIcon />}
        {type === 'share' && <ShareIcon />}
      </div>
      <strong
        data-testid="barItemText"
        className={isMobile ? `${classes.barItemText} ${classes.barItemTextMobile}` : classes.barItemText}
      >
        {CountRound(count)}
      </strong>
    </div>
  );
};

export default CounterItem;
