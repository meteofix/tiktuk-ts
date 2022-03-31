
export interface IAuthorMeta {
    id: string;
    secUid: string;
    name: string;
    nickName: string;
    verified: boolean;
    signature: string;
    avatar: string;
    following: number;
    fans: number;
    heart: number;
    video: number;
    digg: number;
}

export interface IMusicMeta {
    musicId: string;
    musicName: string;
    musicAuthor: string;
    musicOriginal: boolean;
    musicAlbum: string;
    playUrl: string;
    coverThumb: string;
    coverMedium: string;
    coverLarge: string;
    duration: number;
}

export interface ICovers {
    default: string;
    origin: string;
    dynamic: string;
}

export interface IVideoMeta {
    height: number;
    width: number;
    duration: number;
}

export interface IHashtag {
    id: string;
    name: string;
    title: string;
    cover: string;
}

export interface IEffectSticker {
    id: string;
    name: string;
}

export interface IFeed {
    id: string;
    secretID: string;
    text: string;
    createTime: number;
    authorMeta: IAuthorMeta;
    musicMeta: IMusicMeta;
    covers: ICovers;
    webVideoUrl: string;
    videoUrl: string;
    videoUrlNoWaterMark: string;
    videoApiUrlNoWaterMark: string;
    videoMeta: IVideoMeta;
    diggCount: number;
    shareCount: number;
    playCount: number;
    commentCount: number;
    downloaded: boolean;
    mentions: string[];
    hashtags: IHashtag[];
    effectStickers: IEffectSticker[];
}