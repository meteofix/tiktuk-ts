import React, { useContext } from 'react';
import LikeIcon from '../../UI/icons/CounterBar/LikeIcon';
import CommentIcon from '../../UI/icons/CounterBar/CommentIcon';
import ShareIcon from '../../UI/icons/CounterBar/ShareIcon';
import CountRound from '../../utils/countRound';
import { MediaContext} from '../../store/contexts/MediaContext';
import { BarItemImg, BarItemText, BarItemWrapper } from './CounterItem.styled';

type CounterItemProps = {
    type: string,
    count: number
}

const CounterItem = ({ count, type }:CounterItemProps) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <BarItemWrapper>
      <BarItemImg data-testid="barItemImg" mobile={isMobile}>
        {type === 'like' && <LikeIcon />}
        {type === 'comment' && <CommentIcon />}
        {type === 'share' && <ShareIcon />}
      </BarItemImg>
      <BarItemText data-testid="barItemText" mobile={isMobile}>
        {CountRound(count)}
      </BarItemText>
    </BarItemWrapper>
  );
};

export default CounterItem;
