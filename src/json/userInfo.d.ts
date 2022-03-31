export interface IUserInfoBioLink {
    link: string;
    risk: number;
}

export interface IUserInfoUser {
    id: string;
    shortId: string;
    uniqueId: string;
    nickname: string;
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    signature: string;
    createTime: number;
    verified: boolean;
    secUid: string;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    bioLink: IUserInfoBioLink;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
    secret: boolean;
    isADVirtual: boolean;
    roomId: string;
}

export interface IUserInfoStats {
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
}

export interface IUserInfo {
    user: IUserInfoUser;
    stats: IUserInfoStats;
    itemList: any[];
}
