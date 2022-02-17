import { render, screen } from '@testing-library/react';
import TrendingFeedPostsMapper from './TrendingFeedPostsMapper';
import UserFeedPostsMapper from './UserFeedPostsMapper';

jest.mock(
  '../components/User/UserFeed/VideoCompact',
  () =>
    ({ item }) =>
      `renders ${item.id}`
);

describe('TrendingFeedPostsMapper', () => {
  let posts;

  beforeEach(() => {
    posts = [{ id: '101' }, { id: '102' }, { id: '103' }, { id: '104' }, { id: '105' }];
  });

  it('should render Post for all objects in map', () => {
    render(<UserFeedPostsMapper posts={posts} />);

    expect(screen.getByText(/renders 101/i)).toBeInTheDocument();
    expect(screen.getByText(/renders 105/i)).toBeInTheDocument();
    expect(screen.queryByText(/renders 106/i)).not.toBeInTheDocument();
  });
});
