# 🎵 Lucas Missiba - Site Pessoal

[![Deploy Status](https://github.com/LucasMissiba/lucasmissibadev/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/LucasMissiba/lucasmissibadev/actions)
[![Live Site](https://img.shields.io/badge/Live%20Site-lucasmissiba.dev-blue)](https://lucasmissiba.dev)

Um site pessoal moderno e interativo desenvolvido com Next.js 15, React 19, TypeScript e Framer Motion, inspirado no design clean e minimalista com tema preto e branco.

## 🌐 **Acesse o Site**

- **GitHub Pages:** https://lucasmissiba.github.io/lucasmissibadev
- **Domínio Personalizado:** https://lucasmissiba.dev (em breve)

## ✨ **Características**

- 🎨 **Design Moderno**: Tema preto e branco com efeitos 3D e glassmorphism
- 🎵 **Player Musical**: Player 3D interativo com 4 músicas personalizadas
- 📱 **Responsivo**: Layout adaptável para desktop, tablet e mobile
- ⚡ **Performance**: Otimizado com Next.js 15 e React 19
- 🎭 **Animações**: Transições suaves com Framer Motion
- 🔧 **TypeScript**: Código totalmente tipado para melhor manutenção

## 🚀 **Tecnologias Utilizadas**

### Frontend
- **Next.js 15** ⚛️ - Framework React para SSR/SSG
- **React 19** 📘 - Biblioteca para interfaces de usuário
- **TypeScript 5.2** 🎨 - JavaScript com tipagem estática
- **TailwindCSS 3.3** 🎭 - Framework CSS utilitário
- **ShadCN/UI** 🎬 - Componentes UI reutilizáveis
- **Framer Motion 10.16** 📊 - Biblioteca de animações
- **Recharts 2.8** 📈 - Biblioteca de gráficos

### Backend (Preparado para)
- **NestJS 10.3** 🏗️ - Framework Node.js escalável
- **Node.js 22+** 🟢 - Runtime JavaScript
- **Prisma 5.7** 🔺 - ORM moderno para TypeScript
- **MySQL 8.0** 🗄️ - Sistema de gerenciamento de banco

### Ferramentas
- **Docker** 🐳 - Containerização de aplicações
- **Nginx** 🌐 - Servidor web e proxy reverso
- **Redis** 🔴 - Banco de dados em memória
- **GitHub Actions** ⚙️ - CI/CD automatizado

## 📁 **Estrutura do Projeto**

```
lucasmissibadev/
├── public/
│   ├── music/              # 4 arquivos .mp3
│   ├── albums/             # 4 capas de álbuns (jpg/png)
│   └── profile/            # Foto de perfil (perfil.jpg)
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página inicial
│   ├── components/
│   │   ├── Player3D.tsx    # Player de música 3D
│   │   ├── AboutSection.tsx # Seção "Sobre mim"
│   │   ├── StackGrid.tsx   # Grid de tecnologias
│   │   ├── Header.tsx      # Cabeçalho com navegação
│   │   └── Footer.tsx      # Rodapé com contatos
│   └── lib/
│       └── musicList.ts    # Lista de músicas
├── .github/workflows/
│   └── deploy.yml          # Deploy automático
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ **Instalação e Execução**

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LucasMissiba/lucasmissibadev.git
   cd lucasmissibadev
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Adicione seus arquivos de mídia**
   
   Coloque os seguintes arquivos nas respectivas pastas:
   
   **Músicas** (`/public/music/`):
   - `song1.mp3`
   - `song2.mp3` 
   - `song3.mp3`
   - `song4.mp3`
   
   **Capas de álbuns** (`/public/albums/`):
   - `album1.jpg`
   - `album2.jpg`
   - `album3.jpg`
   - `album4.jpg`
   
   **Foto de perfil** (`/public/profile/`):
   - `perfil.jpg`

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ **Build de Produção**

Para gerar o build de produção:

```bash
npm run build
```

## 🎵 **Player Musical**

O player 3D inclui:
- ✅ Controles de play/pause, next/previous
- ✅ Barra de progresso interativa
- ✅ Controle de volume
- ✅ Capas de álbuns com rotação 3D
- ✅ Animações suaves com Framer Motion
- ✅ Design responsivo

## 🎨 **Personalização**

### Cores e Tema
O tema preto e branco pode ser personalizado editando as variáveis CSS em `src/app/globals.css`:

```css
:root {
  --background: 0 0% 0%;        /* Preto */
  --foreground: 0 0% 100%;      /* Branco */
  /* ... outras variáveis */
}
```

### Músicas
Edite a lista de músicas em `src/lib/musicList.ts`:

```typescript
export const musicList: Music[] = [
  {
    id: 1,
    title: "Sua Música",
    artist: "Seu Nome",
    src: "/music/sua-musica.mp3",
    cover: "/albums/sua-capa.jpg",
    duration: 240, // em segundos
  },
  // ... outras músicas
];
```

## 📱 **Responsividade**

O site é totalmente responsivo e otimizado para:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## 🚀 **Deploy Automático**

O site é automaticamente deployado no GitHub Pages a cada push na branch `main` através do GitHub Actions.

### Configuração do GitHub Pages:
1. Vá em **Settings** → **Pages**
2. **Source**: "GitHub Actions"
3. **Custom domain**: `lucasmissiba.dev` (opcional)

## 🤝 **Contribuição**

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 **Contato**

**Lucas Missiba**
- 📧 Email: lucas.missiba@email.com
- 💼 LinkedIn: [linkedin.com/in/lucasmissiba](https://linkedin.com/in/lucasmissiba)
- 🐙 GitHub: [github.com/lucasmissiba](https://github.com/lucasmissiba)
- 🌐 Website: [lucasmissiba.dev](https://lucasmissiba.dev)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐