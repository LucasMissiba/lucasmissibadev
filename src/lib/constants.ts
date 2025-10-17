// Constantes para configuração do site
export const BASE_URL = 'https://lucasmissiba.github.io';
export const BASE_PATH = '/lucasmissibadev';

// Função para obter o caminho correto baseado no ambiente
export const getAssetPath = (path: string): string => {
  // Para GitHub Pages, usar URL absoluta
  return `${BASE_URL}${BASE_PATH}${path}`;
};

// URLs dos assets
export const ASSETS = {
  PROFILE_IMAGE: getAssetPath('/profile/profile.png'),
  MUSIC: {
    AMORES_VICIOS: getAssetPath('/music/Amores, Vícios e Obsessões - BK.mp3'),
    EU_CONSIGUI: getAssetPath('/music/Eu Consegui - BK.mp3'),
    TUDO_MUDOU: getAssetPath('/music/Tudo mudou e nada mudou - BK.mp3'),
    UNIVERSO: getAssetPath('/music/Universo - BK.mp3'),
  },
  ALBUMS: {
    CASTELOS_RUINAS: getAssetPath('/albums/castelos e ruinas.avif'),
    DIAMANTES: getAssetPath('/albums/diamantes.avif'),
    ICARUS: getAssetPath('/albums/icarus.avif'),
    GIGANTES: getAssetPath('/albums/gigantes.png'),
  }
};
