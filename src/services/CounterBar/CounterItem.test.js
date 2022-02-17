import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import CounterItem from './CounterItem';

jest.mock('../../UI/icons/CounterBar/LikeIcon', () => () => 'renders LikeIcon');
jest.mock('../../UI/icons/CounterBar/CommentIcon', () => () => 'renders CommentIcon');
jest.mock('../../UI/icons/CounterBar/ShareIcon', () => () => 'renders ShareIcon');
jest.mock('../../utils/countRound', () => (count) => count);

describe('CounterItem', () => {
  let count, type;

  beforeEach(() => {
    count = 456;
    type = {
      like: 'like',
      comment: 'comment',
      share: 'share',
    };
  });

  describe('expect renders', () => {
    it('should render result of CountRound with "count" prop', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.like} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText('456')).toBeInTheDocument();
    });

    it('should render LikeIcon when type = "like"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.like} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders likeicon/i)).toBeInTheDocument();
    });

    it('should not render LikeIcon when type != "like"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.comment} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders likeicon/i)).not.toBeInTheDocument();
    });
    it('should render CommentIcon when type = "comment"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.comment} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders commenticon/i)).toBeInTheDocument();
    });

    it('should not render CommentIcon when type != "comment"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.like} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders commenticon/i)).not.toBeInTheDocument();
    });

    it('should render ShareIcon when type = "share"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.share} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders shareicon/i)).toBeInTheDocument();
    });

    it('should not render ShareIcon when type != "share"', () => {
      render(
        <TestingContextAndRouterWrapper>
          <CounterItem count={count} type={type.like} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders shareicon/i)).not.toBeInTheDocument();
    });
  });
});
