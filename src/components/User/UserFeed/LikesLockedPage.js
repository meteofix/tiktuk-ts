import React from 'react';
import lockIcon from '../../../UI/icons/lockIcon.svg';
import { Description, LockedPage, LockedPageImg, Title } from './LikesLockedPage.styled';

const LikesLockedPage = ({ user }) => (
  <LockedPage>
    <LockedPageImg logo={lockIcon} />
    <Title>This user`s liked videos are private</Title>
    <Description>Videos liked by {user} are currently hidden</Description>
  </LockedPage>
);

export default LikesLockedPage;
