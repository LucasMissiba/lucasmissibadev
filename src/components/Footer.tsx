'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/lucasmissiba',
            color: 'hover:text-gray-300',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/lucasmissiba',
            color: 'hover:text-blue-400',
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:lucas.missiba@email.com',
            color: 'hover:text-red-400',
        },
    ];

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

    return (
        <footer id="contato" className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
            {/* Partículas de fundo */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid lg:grid-cols-3 gap-12 items-center"
                >
                    {/* Informações pessoais */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center">
                                <span className="text-black font-bold text-xl">LM</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Lucas Missiba</h3>
                                <p className="text-gray-400 text-sm">Desenvolvedor Full Stack</p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            Desenvolvedor carioca apaixonado por tecnologia, design e inovação.
                            Transformando ideias em soluções digitais que fazem a diferença.
                        </p>

                        {/* Redes sociais */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-3 rounded-full glass hover-glow transition-all duration-300 text-gray-400 ${social.color}`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links rápidos */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Sobre Mim', href: '#sobre' },
                                { label: 'Stack', href: '#stacks' },
                                { label: 'Música', href: '#musica' },
                                { label: 'Contato', href: '#contato' },
                            ].map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Informações de contato */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-gray-400" />
                                <span className="text-gray-400 text-sm">lucas.missiba@email.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span className="text-gray-400 text-sm">Disponível para projetos</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                <span className="text-gray-400 text-sm">Rio de Janeiro, Brasil</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Linha divisória */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
                />

                {/* Copyright e botão de voltar ao topo */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center space-x-2 text-gray-400 text-sm"
                    >
                        <span>Desenvolvido com</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={16} className="text-red-500 fill-current" />
                        </motion.div>
                        <span>por</span>
                        <span className="text-white font-medium">Lucas Missiba</span>
                        <span>© 2025</span>
                    </motion.div>

                    {/* Botão de voltar ao topo */}
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 px-4 py-2 glass rounded-full hover-glow transition-all duration-300 text-gray-400 hover:text-white"
                    >
                        <span className="text-sm">Voltar ao topo</span>
                        <ArrowUp size={16} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Efeito de gradiente no fundo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
