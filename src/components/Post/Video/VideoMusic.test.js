import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import React from 'react';
import VideoMusic from './VideoMusic';
import VideoMeta from './VideoMeta';

describe('VideoMusic', () => {
  let musicMeta;
  beforeEach(() => {
    musicMeta = {
      musicName: 'Epic Music',
      musicAuthor: 'Pavel',
    };
  });

  describe('expect renders', () => {
    it('should render musicName and musicAuthor ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoMusic musicMeta={musicMeta} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/epic music - pavel/i)).toBeInTheDocument();
    });
  });

  /** disabled after switching from css modules to styled components */
  // describe('expect classNames', () => {
  //   it('elements should have mobile className when isMobile is true', () => {
  //     render(
  //       <TestingContextAndRouterWrapper isMobile={true}>
  //         <VideoMusic musicMeta={musicMeta} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('musicInfo')).toHaveClass('musicInfoMobile');
  //     expect(screen.getByTestId('musicInfoText')).toHaveClass('musicInfoTextMobile');
  //   });
  //
  //   it('elements should not have mobile className when isMobile is false', () => {
  //     render(
  //       <TestingContextAndRouterWrapper>
  //         <VideoMusic musicMeta={musicMeta} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('musicInfo')).not.toHaveClass('musicInfoMobile');
  //     expect(screen.getByTestId('musicInfoText')).not.toHaveClass('musicInfoTextMobile');
  //   });
  // });
});
