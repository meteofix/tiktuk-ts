import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuthorInfo from './AuthorInfo';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';

jest.mock('../../../UI/icons/UserVerifiedIcon', () => () => 'UserVerifiedIcon mocked ');

describe('AuthorInfo', () => {
  let authorMeta, authorLink, isHover;
  const setIsHover = jest.fn();

  beforeEach(function () {
    authorMeta = {
      name: 'kikakiim',
      nickName: 'Kika Kim',
      verified: false,
    };
    authorLink = `@${authorMeta.name}`;
    isHover = false;
  });

  describe('expect renders', () => {
    it('should render authorMeta name', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/kikakiim/i));
    });

    it('should render "@" before authorMeta name if isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/@kikakiim/i));
    });

    it('should render authorMeta nickName if isDesktopOrTablet is true', () => {
      render(
        <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/kika kim/i));
    });

    it('should render UserVerifiedIcon if verified is true', () => {
      authorMeta.verified = true;
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/userverifiedicon mocked/i)).toBeInTheDocument();
    });
    it('should not render UserVerifiedIcon if verified is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/userverifiedicon mocked/i)).not.toBeInTheDocument();
    });
  });
  describe('mouse events', () => {
    it('should call setIsHover when mouse hover Link', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );
      expect(setIsHover).not.toHaveBeenCalled();
      userEvent.hover(screen.getByTestId('authorLink'));

      expect(setIsHover).toHaveBeenCalled();
    });

    it('should call setIsHover when mouse unhover Link', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );
      expect(setIsHover).not.toHaveBeenCalled();
      userEvent.unhover(screen.getByTestId('authorLink'));

      expect(setIsHover).toHaveBeenCalled();
    });
  });
  describe('expect classNames', () => {
    it('element "authorInfo" should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('authorInfo')).toHaveClass('authorInfoMobile');
    });

    it('element "authorInfo" should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('authorInfo')).not.toHaveClass('authorInfoMobile');
    });

    it('element with "name" should have "underline" className when isHover is true', () => {
      isHover = true;

      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/kikakiim/i)).toHaveClass('underline');
    });

    it('element with "name" should not have "underline" className when isHover is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <AuthorInfo authorMeta={authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/kikakiim/i)).not.toHaveClass('underline');
    });
  });
});
