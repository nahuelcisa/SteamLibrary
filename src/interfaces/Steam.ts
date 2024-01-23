export type Steam = {
    response: Response;
}

export type Response = {
    game_count: number;
    games: Game[];
}

export type Game = {
    appid: number;
    name: string;
    playtime_forever: number;
    img_icon_url: string;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
    rtime_last_played: number;
    content_descriptorids?: number[];
    playtime_disconnected: number;
    has_community_visible_stats?: boolean;
    has_leaderboards?: boolean;
    playtime_2weeks?: number;
}

export type Playerstats = {
    steamID: string;
    gameName: string;
    achievements: Achievement[];
    success: boolean;
}

export type Achievement = {
    apiname: string;
    achieved: number;
    unlocktime: number;
}
