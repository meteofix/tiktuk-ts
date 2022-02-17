import React from 'react';
import { Description, LockedPage, LockedPageImg, Title } from './LikesLockedPage.styled';

type LikesLockedPageProps = {
    user: string,
    lockIcon: any
}

const LikesLockedPage = ({ user, lockIcon }:LikesLockedPageProps) => (
  <LockedPage>
    <LockedPageImg data-testid="lockImage" logo={lockIcon} />
    <Title>This user`s liked videos are private</Title>
    <Description>Videos liked by {user} are currently hidden</Description>
  </LockedPage>
);

export default LikesLockedPage;
