import React from 'react';
import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../utils/testingContextAndRouterWrapper';
import UserProfile from './UserProfile';
import { BrowserRouter, Router } from 'react-router-dom';

jest.mock('../services/Loader/Loader', () => () => 'renders Loader');

jest.mock('../api/requestData', () => ({ setResponseData }) => {
  setResponseData([]);
});
jest.mock('../services/Loader/Loader', () => () => 'renders Loader');
jest.mock('../components/User/UserHeader', () => () => 'renders UserHeader');
jest.mock('../components/User/UserMain', () => () => 'renders UserMain');

describe('UserProfile', () => {
  describe('expect renders', () => {
    let useStateMock, setIsInfoLoadingMock, setUserInfoMock, userInfo;

    beforeAll(() => {
      useStateMock = React.useState;
    });
    beforeEach(() => {
      React.useState = jest.fn();
      setIsInfoLoadingMock = jest.fn();
      setUserInfoMock = jest.fn();
      userInfo = {
        user: {
          uniqueId: 'uniqueId',
        },
      };
    });
    afterEach(() => {
      React.useState = useStateMock;
    });

    it('should renders Loader when isInfoLoading is true', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([true, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );
      expect(screen.getByText(/renders loader/i)).toBeInTheDocument();
    });

    it('should not renders Loader when isInfoLoading is false', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );
      expect(screen.queryByText(/renders loader/i)).not.toBeInTheDocument();
    });

    it('should renders UserHeader and UserMain when loading is false and userInfo is empty', () => {
      React.useState.mockReturnValueOnce([userInfo, () => {}]).mockReturnValueOnce([false, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.getByText(/renders userheader/i)).toBeInTheDocument();
      expect(screen.getByText(/renders usermain/i)).toBeInTheDocument();
    });

    it('should not renders UserHeader and UserMain when loading is true', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([true, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.queryByText(/renders userheader/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders usermain/i)).not.toBeInTheDocument();
    });

    it('should not renders UserHeader and UserMain when userInfo is empty', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
          <UserProfile />
        </Router>
      );

      expect(screen.queryByText(/renders userheader/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders usermain/i)).not.toBeInTheDocument();
    });

    it('should renders "No data" when loading is false and userInfo is empty', () => {
      React.useState.mockReturnValueOnce([[], () => {}]).mockReturnValueOnce([false, setIsInfoLoadingMock]);

      render(
        <Router location={'/@nnn'}>
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

      expect(screen.getByTestId('userLayout')).toHaveClass('userLayoutMobile');
      expect(screen.getByTestId('userLayoutContent')).toHaveClass('userLayoutContentMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserProfile />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('userLayout')).not.toHaveClass('userLayoutMobile');
      expect(screen.queryByTestId('userLayoutContent')).not.toHaveClass('userLayoutContentMobile');
    });
  });
});
