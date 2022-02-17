import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoContainer from './VideoContainer';
import PlayerProvider from '../../../store/contexts/PlayerProvider';

jest.mock(
  '../../../services/VideoPlayer',
  () =>
    ({ url }) =>
      url
);
jest.mock('../../../services/windowFocusHandler', () => () => 'renders windowFocusHandler');
jest.mock(
  '../../../UI/buttons/PlayPauseButton',
  () =>
    ({ playingId }) =>
      `renders PlayPauseButton ${playingId}`
);
jest.mock(
  '../../../UI/buttons/VolumeButton',
  () =>
    ({ isMuted }) =>
      `renders VolumeButton ${isMuted}`
);
jest.mock('../Author/AuthorAvatar', () => () => 'renders AuthorAvatar');
jest.mock('../../../hooks/useVisibility', () => () => '');
jest.mock('../../../services/Loader/Loader', () => () => 'renders Loader');
jest.mock(
  '../../../services/CounterBar/CounterItem',
  () =>
    ({ count, type }) =>
      `${type} ${count}`
);

describe('VideoContainer', () => {
  let post;
  let id;
  const handlePlayPause = jest.fn();
  beforeEach(() => {
    post = {
      authorMeta: {
        name: 'kikakiim',
        avatar: 'https://url-for-avatar.com',
      },
      covers: {
        default: 'https://url-for-default-cover.com',
        dynamic: 'https://url-for-dynamic-cover.com',
      },
      videoUrl: 'https://url-for-video.com',
      diggCount: 1_200_000,
      shareCount: 6543,
      commentCount: 8064,
    };
    id = 5;
  });

  describe('expect render', () => {
    /** disabled because the app uses mocked data instead of api */
    // it('should VideoPlayer calls with "url" prop', () => {
    //   render(
    //     <TestingContextAndRouterWrapper>
    //       <VideoContainer post={post} id={id} />
    //     </TestingContextAndRouterWrapper>
    //   );
    //
    //   expect(screen.getByText(/url-for-video/i));
    // });

    it('should CounterItem renders', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/like 120{5}/i)).toBeInTheDocument();
      expect(screen.getByText(/comment 8064/i)).toBeInTheDocument();
      expect(screen.getByText(/share 6543/i)).toBeInTheDocument();
    });

    it('should render components', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/downloading/i)).toBeInTheDocument();
      expect(screen.getByText(/renders playpausebutton/i)).toBeInTheDocument();
      expect(screen.getByText(/renders volumebutton/i)).toBeInTheDocument();
    });

    it('should render AuthorAvatar when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/renders authoravatar/i)).toBeInTheDocument();
    });

    it('should not render AuthorAvatar when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.queryByText(/renders authoravatar/i)).not.toBeInTheDocument();
    });
  });

  describe('expect user events', () => {
    it('should set playingId by click on videoFrame ', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <PlayerProvider>
            <VideoContainer post={post} id={id} />
          </PlayerProvider>
        </TestingContextAndRouterWrapper>
      );
      expect(screen.queryByText(/renders playpausebutton 5/i)).not.toBeInTheDocument();

      userEvent.click(screen.getByTestId('videoFrame'));

      expect(screen.getByText(/renders playpausebutton 5/i)).toBeInTheDocument();
    });
  });
});
