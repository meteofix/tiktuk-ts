import { createContext } from "react";

export interface IMediaContext {
  isDesktopOrTablet: boolean,
  isMobile: boolean
}

export const MediaContext = createContext<IMediaContext>({
  isDesktopOrTablet: false,
  isMobile: false,
});
