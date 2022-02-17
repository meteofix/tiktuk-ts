import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoMusic from './VideoMusic';

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
});
