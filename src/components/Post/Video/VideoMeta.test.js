import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import React from 'react';
import VideoMeta from './VideoMeta';

describe('VideoMeta', () => {
  const text = 'test text';

  jest.mock('../../../utils/parseHashtags', () => (text) => text);

  describe('expect renders', () => {
    it('should render data from ParseHashtags, called with "text" prop ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoMeta text={text} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });

  /** disabled after switching from css modules to styled components */
  // describe('expect classNames', () => {
  //   it('element "videoMeta" should have mobile className when isMobile is true', () => {
  //     render(
  //       <TestingContextAndRouterWrapper isMobile={true}>
  //         <VideoMeta text={text} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('videoMeta')).toHaveClass('videoMetaMobile');
  //   });
  //
  //   it('element "videoMeta" should not have mobile className when isMobile is false', () => {
  //     render(
  //       <TestingContextAndRouterWrapper>
  //         <VideoMeta text={text} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('videoMeta')).not.toHaveClass('videoMetaMobile');
  //   });
  // });
});
