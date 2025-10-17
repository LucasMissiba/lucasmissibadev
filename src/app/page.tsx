'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import StackGrid from '@/components/StackGrid';
import ProjectsSection from '@/components/ProjectsSection';
import Player3D from '@/components/Player3D';
import CommentsSection from '@/components/CommentsSection';
import Footer from '@/components/Footer';
import Silk from '@/components/Silk';
import { ArrowDown, Code, Music, Sparkles } from 'lucide-react';
import { ASSETS } from '@/lib/constants';

export default function Home() {
    const scrollToNext = () => {
        const aboutSection = document.getElementById('sobre');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">

            <Header />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
                {/* Fundo Silk animado */}
                <div className="absolute inset-0 z-0">
                    <Silk
                        speed={3}
                        scale={1.2}
                        color="#4A5568"
                        noiseIntensity={0.8}
                        rotation={0}
                    />
                </div>
                
                {/* Overlay com fade gradiente suave */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/20 z-10" />
                
                {/* Overlay adicional para suavizar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Avatar flutuante - Removido */}

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
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
                        >
                            {[
                                { icon: Code, label: "Projetos", value: "2" },
                                { icon: Sparkles, label: "Tecnologias", value: "20+" },
                                { icon: Code, label: "Anos", value: "2" },
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

            {/* Seção Projetos */}
            <ProjectsSection />

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

            {/* Seção de Comentários */}
            <CommentsSection />

            <Footer />
        </div>
    );
}
