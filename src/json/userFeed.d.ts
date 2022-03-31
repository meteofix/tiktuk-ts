
export interface IUserFeedVideo {
    id: string;
    height: number;
    width: number;
    duration: number;
    ratio: string;
    cover: string;
    originCover: string;
    dynamicCover: string;
    playAddr: string;
    downloadAddr: string;
    shareCover: string[];
    reflowCover: string;
    bitrate: number;
    encodedType: string;
    format: string;
    videoQuality: string;
    encodeUserTag: string;
    codecType: string;
    definition: string;
}

export interface IUserFeedAuthor {
    id: string;
    uniqueId: string;
    nickname: string;
    avatarThumb: string;
    avatarMedium: string;
    avatarLarger: string;
    signature: string;
    verified: boolean;
    secUid: string;
    secret: boolean;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
}

export interface IUserFeedMusic {
    id: string;
    title: string;
    playUrl: string;
    coverThumb: string;
    coverMedium: string;
    coverLarge: string;
    authorName: string;
    original: boolean;
    duration: number;
    album: string;
}

export interface IUserFeedChallenge {
    id: string;
    title: string;
    desc: string;
    profileThumb: string;
    profileMedium: string;
    profileLarger: string;
    coverThumb: string;
    coverMedium: string;
    coverLarger: string;
    isCommerce: boolean;
}

export interface IUserFeedStats {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number;
}

export interface IUserFeedDuetInfo {
    duetFromId: string;
}

export interface IUserFeedTextExtra {
    awemeId: string;
    start: number;
    end: number;
    hashtagName: string;
    hashtagId: string;
    type: number;
    userId: string;
    isCommerce: boolean;
    userUniqueId: string;
    secUid: string;
    subType: number;
}

export interface IUserFeedEffectSticker {
    name: string;
    ID: string;
}

export interface IUserFeedAuthorStats {
    followingCount: number;
    followerCount: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
    heart: number;
}

export interface IUserFeedStickersOnItem {
    stickerType: number;
    stickerText: string[];
}

export interface IUserFeedWarnInfo {
    text: string;
    url: string;
    type: number;
    lang: string;
    key: string;
}

export interface IUserFeedItemList {
    id: string;
    desc: string;
    createTime: number;
    video: IUserFeedVideo;
    author: IUserFeedAuthor;
    music: IUserFeedMusic;
    challenges: IUserFeedChallenge[];
    stats: IUserFeedStats;
    duetInfo: IUserFeedDuetInfo;
    originalItem: boolean;
    officalItem: boolean;
    textExtra: IUserFeedTextExtra[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    showNotPass: boolean;
    vl1: boolean;
    itemMute: boolean;
    effectStickers: IUserFeedEffectSticker[];
    authorStats: IUserFeedAuthorStats;
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    shareEnabled: boolean;
    isAd: boolean;
    duetDisplay: number;
    stitchDisplay: number;
    stickersOnItem: IUserFeedStickersOnItem[];
    warnInfo: IUserFeedWarnInfo[];
}

export interface IUserFeed {
    statusCode: number;
    itemList: IUserFeedItemList[];
    cursor: string;
    hasMore: boolean;
}
