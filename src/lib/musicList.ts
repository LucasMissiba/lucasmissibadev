export interface Music {
    id: number;
    title: string;
    artist: string;
    src: string;
    cover: string;
    duration: number;
}

export const musicList: Music[] = [
    {
        id: 1,
        title: "Coding Dreams",
        artist: "Lucas Missiba",
        src: "/music/song1.mp3",
        cover: "/albums/album1.jpg",
        duration: 240, // 4 minutos
    },
    {
        id: 2,
        title: "Digital Innovation",
        artist: "Lucas Missiba",
        src: "/music/song2.mp3",
        cover: "/albums/album2.jpg",
        duration: 195, // 3:15 minutos
    },
    {
        id: 3,
        title: "Tech Revolution",
        artist: "Lucas Missiba",
        src: "/music/song3.mp3",
        cover: "/albums/album3.jpg",
        duration: 210, // 3:30 minutos
    },
    {
        id: 4,
        title: "Future Code",
        artist: "Lucas Missiba",
        src: "/music/song4.mp3",
        cover: "/albums/album4.jpg",
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
