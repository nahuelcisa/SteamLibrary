import { type Game, type Achievement } from "../interfaces/Steam"

export const GetOwnedGames = async () => {
    const response = await fetch(
        "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533&format=json&include_appinfo=true",
        {
            method: 'GET',
            mode: 'no-cors',
        }
    );
    const data = await response.json();
    const games = data.response.games;

    return games as Game;
}

export async function GetPlayerAchievements(appid: number) {

    try {
        const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533`,
            {
                method: 'GET',
                mode: 'no-cors',
            }
        )

        const data = await response.json();
        const achievement = data.playerstats;

        return achievement as Achievement;
    } catch (error) {
        console.log("error:", error)
    }

}

/* export const GetPlayerAchievements = async (appid: number) => {
    const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533`,
        {
            method: 'GET',
            mode: 'no-cors',
        }
    )

    const data = await response.json();
    const achievement = data.response.games;

    return achievement as Achievement;
} */