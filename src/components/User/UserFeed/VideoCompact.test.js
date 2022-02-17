import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoCompact from './VideoCompact';

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
    /** disabled because the app uses mocked data instead of api */
    // it('should VideoPlayer calls with "url" prop', () => {
    //   render(
    //     <TestingContextAndRouterWrapper isMobile>
    //       <VideoCompact item={item} />
    //     </TestingContextAndRouterWrapper>
    //   );
    //
    //   expect(screen.getByText(/link-to-download-addr/i));
    // });

    it('should render result of CountRound with "count" prop', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoCompact item={item} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/20{6}/i));
    });
  });
});
