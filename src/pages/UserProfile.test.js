import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import TestingContextAndRouterWrapper from '../utils/testingContextAndRouterWrapper';
import UserProfile from './UserProfile';

jest.mock('../services/Loader/Loader', () => () => 'renders Loader');

jest.mock('../api/requestData', () => ({ setResponseData }) => {
  setResponseData([]);
});
jest.mock('../services/Loader/Loader', () => () => 'renders Loader');
jest.mock('../components/User/UserHeader', () => () => 'renders UserHeader');
jest.mock('../components/User/UserMain', () => () => 'renders UserMain');

describe('UserProfile', () => {
  describe('expect renders', () => {
    let useStateMock, setIsLoadingMock, userInfo, userFeed, setUserFeedMock, setUserInfoMock;

    beforeAll(() => {
      useStateMock = React.useState;
    });
    beforeEach(() => {
      React.useState = jest.fn();
      setIsLoadingMock = jest.fn();
      setUserInfoMock = jest.fn();
      setUserFeedMock = jest.fn();
      userInfo = {
        user: {
          uniqueId: 'uniqueId',
        },
      };
      userFeed = {
        someData: 123,
      };
    });
    afterEach(() => {
      React.useState = useStateMock;
    });

    it('should renders Loader when isInfoLoading is true', () => {
      React.useState
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([true, setIsLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );
      expect(screen.getByText(/renders loader/i)).toBeInTheDocument();
    });

    it('should not renders Loader when isInfoLoading is false', () => {
      React.useState
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([false, setIsLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );
      expect(screen.queryByText(/renders loader/i)).not.toBeInTheDocument();
    });

    it('should renders UserHeader and UserMain when loading is false and userInfo or userFeed is empty', () => {
      React.useState
        .mockReturnValueOnce([userInfo, () => {}])
        .mockReturnValueOnce([userFeed, () => {}])
        .mockReturnValueOnce([false, setIsLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.getByText(/renders userheader/i)).toBeInTheDocument();
      expect(screen.getByText(/renders usermain/i)).toBeInTheDocument();
    });

    it('should not renders UserHeader and UserMain when loading is true', () => {
      React.useState
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([true, setIsLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.queryByText(/renders userheader/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders usermain/i)).not.toBeInTheDocument();
    });

    it('should not renders UserHeader and UserMain when userInfo or userFeed is empty', () => {
      React.useState
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([false, setIsLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.queryByText(/renders userheader/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders usermain/i)).not.toBeInTheDocument();
    });

    it('should renders "No data" when loading is false and userInfo or userFeed is empty', () => {
      React.useState
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([[], () => {}])
        .mockReturnValueOnce([false, setIsLoadingMock]);

      render(
        <Router location="/@nnn">
          <UserProfile />
        </Router>
      );

      expect(screen.getByText(/no data/i)).toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <UserProfile />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('userLayout')).toHaveStyle('width: 100vw');
      expect(screen.getByTestId('userLayout')).toHaveStyle('max-width: 100vw');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserProfile />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('userLayout')).not.toHaveStyle('width: 100vw');
      expect(screen.queryByTestId('userLayout')).not.toHaveStyle('max-width: 100vw');
    });
  });
});
