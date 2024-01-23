

/* import { type Achievement } from "../interfaces/achievement";

interface Props {
    title: string;
    horas: string;
    appid: number;
}

interface Game {
    steamID?: string
    gameName?: string
    achievements?: [
        apiname: string,
        achieved: number,
        unlocktime: number
    ]
    success?: boolean
} */

import { useEffect, useState } from "react";


export function Card({ title, horas, appid }) {

    const [juego, setJuego] = useState({});

    /* useEffect(() => {
        console.log("entre")
        fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.playerstats)
                setJuego(data.playerstats)
                console.log(juego);
            })
    }, [juego]) */


    var countOfAchievement = 0;

    if (
        juego.success == true &&
        juego.achievements != undefined &&
        juego.achievements.length
    ) {
        juego.achievements.map((achievement) => {
            if (achievement.achieved) {
                countOfAchievement++;
            }
        });
    }

    /* console.log(juego); */

    return (
        <>
            <main className="flex justify-center w-80 mx-auto mb-9">
                <section className="group h-96 w-96">
                    <div
                        className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    >
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full rounded-xl object-fill shadow-xl shadow-black/40"
                                /*                                 onError={({ currentTarget }) => {
                                                                    currentTarget.onerror = null;
                                                                    currentTarget.src = `https://steamcdn-a.akamaihd.net/steam/apps/${appid}/header.jpg`
                                                                }} */
                                src={`https://steamcdn-a.akamaihd.net/steam/apps/${appid}/library_600x900_2x.jpg`}
                                alt={`No se cargo la imagen de ${title}`}
                            />
                        </div>
                        <div
                            className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div
                                className="flex min-h-full flex-col items-center justify-center text-white">
                                <h1 className="text-3xl font-bold">
                                    <a
                                        href={`https://store.steampowered.com/app/${appid}`}
                                        target="_blank">{title}</a>
                                </h1>

                                <h2 className="text-lg">
                                    {
                                        juego.success == true &&
                                            juego.achievements != undefined
                                            ? `Logros ${countOfAchievement} /
								            ${juego.achievements.length}`
                                            : "El juego no tiene logros"
                                    }
                                </h2>
                                <p className="text-base">{horas} Horas registradas</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}