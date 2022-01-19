import React from 'react';
import classes from './FollowButton.module.css';

const FollowButton = ({ additionalClass = '' }) => (
  <button type="button" className={`${classes.followButton} ${additionalClass}`}>
    Follow
  </button>
);

export default FollowButton;
