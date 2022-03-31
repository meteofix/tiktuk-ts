import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AuthorAvatar from './AuthorAvatar';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';

describe('AuthorAvatar', () => {
  let avatar;
  let authorLink;
  const setIsHover = jest.fn();
  beforeEach(() => {
    authorLink = '@kikakiim';
    avatar =
      'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637089200&x-signature=AI9QoPIXQX%2F4YTxzLf%2BA5beaSO8%3D';
  });

  describe('expect renders', () => {
    it('should render profile image', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorAvatar avatar={avatar} authorLink={authorLink} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByAltText(/profile img/i)).toBeInTheDocument();
    });

    it('should render follow image when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <AuthorAvatar avatar={avatar} authorLink={authorLink} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByAltText(/follow/i)).toBeInTheDocument();
    });

    it('should not render follow image when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorAvatar avatar={avatar} authorLink={authorLink} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/follow/i)).not.toBeInTheDocument();
    });
  });

  describe('mouse events', () => {
    it('should call setIsHover when mouse hover Link', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorAvatar avatar={avatar} authorLink={authorLink} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );
      expect(setIsHover).not.toHaveBeenCalled();
      userEvent.hover(screen.getByTestId('tiktokAvatar'));

      expect(setIsHover).toHaveBeenCalled();
    });

    it('should call setIsHover when mouse unhover Link', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorAvatar avatar={avatar} authorLink={authorLink} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );
      expect(setIsHover).not.toHaveBeenCalled();
      userEvent.unhover(screen.getByTestId('tiktokAvatar'));

      expect(setIsHover).toHaveBeenCalled();
    });
  });
});
