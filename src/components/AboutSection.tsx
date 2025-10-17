'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/constants';

const AboutSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="sobre" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Texto */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold gradient-text mb-8"
                        >
                            Sobre Mim
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-gray-300 leading-relaxed"
                        >
                            <p className="text-lg">
                                <span className="font-semibold text-white">Lucas Missiba</span> - Um carioca da Zona Norte que transformou sua paixão por tecnologia em uma jornada de crescimento constante.
                            </p>

                            <p>
                                Da experiência no <span className="text-white font-medium">Tribunal de Justiça do Rio de Janeiro</span>, onde atuou como estagiário de Direito na Vara de Família da Pavuna (2020-2022), até sua ascensão meteórica na <span className="text-white font-medium">Alocama</span>, Lucas demonstrou que determinação e visão sistêmica são as chaves para o sucesso.
                            </p>

                            <p>
                                Ingressou na Alocama em dezembro de 2024 como <span className="text-white font-medium">Auxiliar Administrativo</span>, mas sua capacidade técnica excepcional e visão inovadora não passaram despercebidas. Em apenas <span className="text-white font-medium">10 meses</span>, foi promovido para <span className="text-white font-medium">Desenvolvedor Full Stack Júnior</span> em outubro de 2025 - uma conquista que reflete não apenas suas habilidades técnicas, mas sua capacidade de enxergar além do código.
                            </p>

                            <p>
                                Atualmente cursando <span className="text-white font-medium">Gestão de TI na Estácio de Sá</span> (conclusão em junho/2026) e <span className="text-white font-medium">Cyber Security na FIAP</span> (conclusão em dezembro/2027), Lucas combina conhecimento acadêmico sólido com experiência prática real.
                            </p>

                            <motion.blockquote
                                variants={itemVariants}
                                className="border-l-4 border-white/30 pl-6 italic text-lg text-gray-200 bg-white/5 p-6 rounded-r-lg"
                            >
                                &ldquo;Acredito que a verdadeira inovação nasce da combinação entre visão estratégica e execução prática. Cada linha de código que escrevo é pensada para impactar pessoas reais, resolver problemas reais.&rdquo;
                            </motion.blockquote>

                            <p>
                                Com foco em <span className="text-white font-medium">JavaScript e PHP</span>, Lucas desenvolve interfaces imersivas, automações inteligentes e sistemas que fazem a diferença no dia a dia das pessoas.
                            </p>
                        </motion.div>

                        {/* Estatísticas */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-6 mt-8"
                        >
                            <div className="glass rounded-xl p-6 text-center hover-lift">
                                <div className="text-3xl font-bold text-white mb-2">10</div>
                                <div className="text-sm text-gray-400">Meses para promoção</div>
                            </div>
                            <div className="glass rounded-xl p-6 text-center hover-lift">
                                <div className="text-3xl font-bold text-white mb-2">2</div>
                                <div className="text-sm text-gray-400">Anos de experiência</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Foto */}
                    <motion.div
                        variants={imageVariants}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            className="relative w-80 h-80 lg:w-96 lg:h-96"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Efeito de brilho de fundo */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/5 blur-xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Container da imagem */}
                            <div className="relative w-full h-full rounded-full overflow-hidden glass border-4 border-white/20 shadow-2xl">
                                <Image
                                    src={ASSETS.PROFILE_IMAGE}
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
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <span className="text-4xl font-bold text-white">LM</span>
                                        </div>
                                        <p className="text-white text-sm">Lucas Missiba</p>
                                    </div>
                                </div>

                                {/* Overlay com efeito de partículas */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"
                                    animate={{
                                        background: [
                                            "linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)",
                                            "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
                                            "linear-gradient(225deg, transparent, rgba(255,255,255,0.05), transparent)",
                                            "linear-gradient(315deg, transparent, rgba(255,255,255,0.1), transparent)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </div>

                            {/* Elementos decorativos flutuantes */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full"
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [360, 180, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
