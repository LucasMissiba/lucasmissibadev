import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
    title: 'Lucas Missiba - Desenvolvedor Full Stack',
    description: 'Site pessoal de Lucas Missiba, desenvolvedor carioca apaixonado por tecnologia, design e inovação. Especialista em JavaScript, PHP, React, Next.js e muito mais.',
    keywords: [
        'Lucas Missiba',
        'Desenvolvedor Full Stack',
        'JavaScript',
        'PHP',
        'React',
        'Next.js',
        'TypeScript',
        'Desenvolvedor Rio de Janeiro',
        'Portfolio',
        'Desenvolvimento Web',
        'Frontend',
        'Backend',
        'Alocama'
    ],
    authors: [{ name: 'Lucas Missiba' }],
    creator: 'Lucas Missiba',
    publisher: 'Lucas Missiba',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://lucasmissiba.dev'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Lucas Missiba - Desenvolvedor Full Stack',
        description: 'Site pessoal de Lucas Missiba, desenvolvedor carioca apaixonado por tecnologia, design e inovação.',
        url: 'https://lucasmissiba.dev',
        siteName: 'Lucas Missiba Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Lucas Missiba - Desenvolvedor Full Stack',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lucas Missiba - Desenvolvedor Full Stack',
        description: 'Site pessoal de Lucas Missiba, desenvolvedor carioca apaixonado por tecnologia, design e inovação.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/LM.png" />
                <link rel="shortcut icon" type="image/png" href="/favicon/LM.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/LM.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/LM.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/LM.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
