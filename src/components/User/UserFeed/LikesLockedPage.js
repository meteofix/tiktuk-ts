import React from 'react';
import classes from './LikesLockedPage.module.css_';
import lockIcon from '../../../UI/icons/lockIcon.svg';
import styled, { css } from 'styled-components';

const LockedPage = styled.div`
  padding-top: 160px;
  padding-bottom: 228px;
  text-align: center;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.textColor};
`;

const Description = styled.p`
  max-width: 480px;
  display: inline-block;
  font-weight: 400;
  color: ${(props) => props.theme.disabledColor};
`;

const LockedPageImg = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.disabledColor};
  -webkit-mask: url(${(props) => props.logo}) no-repeat center;
  mask: url(${(props) => props.logo}) no-repeat center;
`;

const LikesLockedPage = ({ user }) => (
  <LockedPage
  // className={classes.lockedPage}
  >
    <LockedPageImg logo={lockIcon} />
    <Title
    // className={classes.title}
    >
      This user`s liked videos are private
    </Title>
    <Description
    // className={classes.desc}
    >
      Videos liked by {user} are currently hidden
    </Description>
  </LockedPage>
);

export default LikesLockedPage;
