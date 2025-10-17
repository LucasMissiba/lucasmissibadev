export interface Music {
    id: number;
    title: string;
    artist: string;
    src: string;
    cover: string;
    duration: number;
}

const basePath = process.env.NODE_ENV === 'production' ? '/lucasmissibadev' : '';

export const musicList: Music[] = [
    {
        id: 1,
        title: "Amores, Vícios e Obsessões",
        artist: "BK",
        src: `${basePath}/music/Amores, Vícios e Obsessões - BK.mp3`,
        cover: `${basePath}/albums/castelos e ruinas.avif`,
        duration: 240, // 4 minutos
    },
    {
        id: 2,
        title: "Eu Consegui",
        artist: "BK",
        src: `${basePath}/music/Eu Consegui - BK.mp3`,
        cover: `${basePath}/albums/diamantes.avif`,
        duration: 195, // 3:15 minutos
    },
    {
        id: 3,
        title: "Tudo mudou e nada mudou",
        artist: "BK",
        src: `${basePath}/music/Tudo mudou e nada mudou - BK.mp3`,
        cover: `${basePath}/albums/icarus.avif`,
        duration: 210, // 3:30 minutos
    },
    {
        id: 4,
        title: "Universo",
        artist: "BK",
        src: `${basePath}/music/Universo - BK.mp3`,
        cover: `${basePath}/albums/gigantes.png`,
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
