'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import StackGrid from '@/components/StackGrid';
import Player3D from '@/components/Player3D';
import Footer from '@/components/Footer';
import { ArrowDown, Code, Music, Sparkles } from 'lucide-react';

export default function Home() {
    const scrollToNext = () => {
        const aboutSection = document.getElementById('sobre');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Partículas flutuantes de fundo */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                        }}
                    />
                ))}
            </div>

            <Header />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Avatar flutuante */}
                        <motion.div
                            className="relative mx-auto w-32 h-32 mb-8"
                            animate={{
                                y: [0, -20, 0],
                                rotateY: [0, 10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden glass border-4 border-white/20 shadow-2xl">
                                <Image
                                    src={`${process.env.NODE_ENV === 'production' ? '/lucasmissibadev' : ''}/profile/profile.png`}
                                    alt="Lucas Missiba"
                                    fill
                                    className="object-cover"
                                    priority
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center" style={{ display: 'none' }}>
                                    <span className="text-6xl font-bold text-white">LM</span>
                                </div>
                            </div>

                            {/* Efeito de brilho */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </motion.div>

                        {/* Título principal */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text"
                        >
                            Lucas Missiba
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <p className="text-xl md:text-2xl text-gray-300 font-light">
                                Desenvolvedor Full Stack
                            </p>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Transformando ideias em soluções digitais inovadoras.
                                Apaixonado por tecnologia, design e a arte de criar experiências únicas.
                            </p>
                        </motion.div>

                        {/* Botões de ação */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToNext}
                                className="px-8 py-4 glass rounded-full hover-glow transition-all duration-300 flex items-center space-x-2"
                            >
                                <span className="text-white font-medium">Conhecer mais</span>
                                <ArrowDown size={20} className="text-white" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('musica')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 glass rounded-full hover-glow transition-all duration-300 flex items-center space-x-2"
                            >
                                <Music size={20} className="text-white" />
                                <span className="text-white font-medium">Ouvir música</span>
                            </motion.button>
                        </motion.div>

                        {/* Estatísticas */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto"
                        >
                            {[
                                { icon: Code, label: "Projetos", value: "50+" },
                                { icon: Sparkles, label: "Tecnologias", value: "25+" },
                                { icon: Music, label: "Músicas", value: "4" },
                                { icon: Code, label: "Anos", value: "3+" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass rounded-xl p-6 text-center hover-lift"
                                >
                                    <stat.icon size={32} className="text-white mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Indicador de scroll */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Seção Sobre */}
            <AboutSection />

            {/* Seção Stacks */}
            <StackGrid />

            {/* Seção Música */}
            <section id="musica" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                            Player Musical
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Relaxe e aproveite uma seleção especial de músicas enquanto navega pelo site
                        </p>
                    </motion.div>

                    <Player3D />
                </div>
            </section>

            <Footer />
        </div>
    );
}
