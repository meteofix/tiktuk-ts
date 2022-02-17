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
});
