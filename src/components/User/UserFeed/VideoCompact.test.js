import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import React from 'react';
import VideoCompact from './VideoCompact';
import VideoContainer from '../../Post/Video/VideoContainer';

jest.mock(
  '../../../services/VideoPlayer',
  () =>
    ({ url }) =>
      url
);
jest.mock('../../../utils/countRound', () => (count) => `renders CountRound with ${count}`);
describe('VideoCompact', () => {
  let item;

  beforeEach(() => {
    item = {
      video: {
        dynamicCover: 'https://link-to-dynamic-cover.com',
        cover: 'https://link-to-cover.com',
        downloadAddr: 'https://link-to-download-addr.com',
      },
      stats: {
        playCount: 2_000_000,
      },
    };
  });
  describe('expect render', () => {
    it('should VideoPlayer calls with "url" prop', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoCompact item={item} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/link-to-download-addr/i));
    });

    it('should render result of CountRound with "count" prop', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoCompact item={item} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/20{6}/i));
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoCompact item={item} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('videoFeedItem')).toHaveClass('videoFeedItemMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={false}>
          <VideoCompact item={item} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('videoFeedItem')).not.toHaveClass('videoFeedItemMobile');
    });
  });
});
