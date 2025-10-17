export interface Music {
    id: number;
    title: string;
    artist: string;
    src: string;
    cover: string;
    duration: number;
}

import { ASSETS } from './constants';

export const musicList: Music[] = [
    {
        id: 1,
        title: "Amores, Vícios e Obsessões",
        artist: "BK",
        src: ASSETS.MUSIC.AMORES_VICIOS,
        cover: ASSETS.ALBUMS.CASTELOS_RUINAS,
        duration: 240, // 4 minutos
    },
    {
        id: 2,
        title: "Eu Consegui",
        artist: "BK",
        src: ASSETS.MUSIC.EU_CONSIGUI,
        cover: ASSETS.ALBUMS.DIAMANTES,
        duration: 195, // 3:15 minutos
    },
    {
        id: 3,
        title: "Tudo mudou e nada mudou",
        artist: "BK",
        src: ASSETS.MUSIC.TUDO_MUDOU,
        cover: ASSETS.ALBUMS.ICARUS,
        duration: 210, // 3:30 minutos
    },
    {
        id: 4,
        title: "Universo",
        artist: "BK",
        src: ASSETS.MUSIC.UNIVERSO,
        cover: ASSETS.ALBUMS.GIGANTES,
        duration: 225, // 3:45 minutos
    },
];

export const getMusicById = (id: number): Music | undefined => {
    return musicList.find(music => music.id === id);
};

export const getNextMusic = (currentId: number): Music => {
    const currentIndex = musicList.findIndex(music => music.id === currentId);
    const nextIndex = (currentIndex + 1) % musicList.length;
    return musicList[nextIndex];
};

export const getPreviousMusic = (currentId: number): Music => {
    const currentIndex = musicList.findIndex(music => music.id === currentId);
    const prevIndex = currentIndex === 0 ? musicList.length - 1 : currentIndex - 1;
    return musicList[prevIndex];
};
