import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';

jest.mock('react-player/lazy', () => ({ url }) => <>url is {url}</>);

describe('VideoPlayer', () => {
  let url;
  beforeEach(() => {
    url = 'https://url-to-video.com';
  });

  it('should renders ReactPlayer with props', () => {
    render(<VideoPlayer url={url} />);

    expect(screen.getByText(/url-to-video/i)).toBeInTheDocument();
  });
});
