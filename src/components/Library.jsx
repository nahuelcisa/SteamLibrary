
import { useEffect, useState } from "react";
import { Card } from "./Card.jsx";

/* const response = await fetch(
    " http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533&format=json&include_appinfo=true",
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors', // <---
        cache: 'default'
    }
);

const data = await response.json(); */

export function Library() {


    /*   const games = data.response.games; */

    fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0C597FED8B986897CCE87238DFBCBC8A&steamid=76561198099032533&format=json&include_appinfo=true`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors', // <---
            cache: 'default'
        }
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.playerstats)
            console.log(juego);
        })


    const [listaNueva, setListaNueva] = useState(games.slice(0, 20))
    const [index, setIndex] = useState(20);


    const handleButton = () => {
        if ((listaNueva.length - 1) + 20 > (games.length - 1) - 20) {
            setIndex((listaNueva.length - 1) + 20)
        } else {
            setIndex(games.length - 1);
        }

        console.log('a')
    }

    useEffect(() => {
        setListaNueva(games.slice(0, index));
    }, [index])

    const ordenarLista = (lista) => {
        lista.sort(function (a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        return lista;
    };

    return (
        <>
            <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto content-center justify-center mt-20"
            >
                {
                    listaNueva.map(({ name, playtime_forever: horas, appid }/* : Game */) => (
                        <Card title={name} horas={(horas / 60).toFixed(1)} appid={appid} key={appid} />
                    ))
                }
            </section>
            <button
                className="flex flex-row justify-center mx-auto py-3 px-5 bg-red-500 rounded-xl text-xl font-bold mb-0"
                onClick={() => {
                    console.log("aaa")
                }}
            >Cargar más juegos</button>
        </>
    )
}