import React from 'react';
import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../utils/testingContextAndRouterWrapper';
import TrendingFeed from './TrendingFeed';

jest.mock('../services/TrendingFeedPostsMapper', () => () => 'renders TrendingFeedPostsMapper');
jest.mock('../api/requestData', () => ({ setResponseData }) => {
  setResponseData([]);
});
jest.mock('../services/Loader/Loader', () => () => 'renders Loader');
jest.mock(
  '../store/contexts/PlayerProvider',
  () =>
    ({ children }) =>
      children
);

describe('TrendingFeed', () => {
  describe('expect renders', () => {
    let useStateMock, setIsLoadingMock, setResponseDataMock;

    beforeAll(() => {
      useStateMock = React.useState;
    });
    beforeEach(() => {
      React.useState = jest.fn();
      setIsLoadingMock = jest.fn();
      setResponseDataMock = jest.fn();
    });
    afterEach(() => {
      React.useState = useStateMock;
    });

    it('should renders Loader when loading is true', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([true, setIsLoadingMock]);
      render(<TrendingFeed />);

      expect(screen.getByText(/renders loader/i)).toBeInTheDocument();
    });

    it('should not renders Loader when loading is false', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsLoadingMock]);
      render(<TrendingFeed />);

      expect(screen.queryByText(/renders loader/i)).not.toBeInTheDocument();
    });

    it('should renders TrendingFeedPostsMapper when loading is false', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsLoadingMock]);
      render(<TrendingFeed />);

      expect(screen.getByText(/renders trendingfeedpostsmapper/i)).toBeInTheDocument();
    });

    it('should not renders TrendingFeedPostsMapper when loading is true', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([true, setIsLoadingMock]);
      render(<TrendingFeed />);

      expect(screen.queryByText(/renders trendingfeedpostsmapper/i)).not.toBeInTheDocument();
    });

    /** disabled because the app uses mocked data instead of api */
    // it('should call setIsLoading with "true"', () => {
    //   React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsLoadingMock]);
    //   render(<TrendingFeed />);
    //
    //   expect(setIsLoadingMock).toHaveBeenCalledWith(true);
    // });

    /** disabled because the app uses mocked data instead of api */
    // it('should calls "requestData" with setResponseData callback ', () => {
    //   React.useState.mockReturnValueOnce([[], setResponseDataMock]).mockReturnValueOnce([false, setIsLoadingMock]);
    //
    //   render(<TrendingFeed />);
    //
    //   expect(setResponseDataMock).toHaveBeenCalled();
    // });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <TrendingFeed />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('feedWrapper')).toHaveClass('feedWrapperMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <TrendingFeed />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('feedWrapper')).not.toHaveClass('feedWrapperMobile');
    });
  });
});
