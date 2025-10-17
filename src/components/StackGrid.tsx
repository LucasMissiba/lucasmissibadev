'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Zap, 
  Type, 
  Palette, 
  Layers, 
  Sparkles, 
  BarChart3,
  Building2,
  Server,
  Database,
  Shield,
  Bot,
  Plug,
  Container,
  Globe,
  Circle,
  GitBranch,
  Search,
  TestTube,
  Timer,
  ShieldCheck,
  Lock,
  RotateCcw,
  Key
} from 'lucide-react';

interface StackItem {
    name: string;
    emoji: string;
    icon: React.ReactNode;
    description: string;
    category: string;
}

const stackData: StackItem[] = [
  // Frontend
  { name: "Next.js 15", emoji: "⚛️", icon: <FileText className="w-8 h-8 text-blue-400" />, description: "Framework React para SSR/SSG", category: "Frontend" },
  { name: "React 19", emoji: "⚛️", icon: <Zap className="w-8 h-8 text-cyan-400" />, description: "Biblioteca para interfaces de usuário", category: "Frontend" },
  { name: "TypeScript 5.2", emoji: "🔷", icon: <Type className="w-8 h-8 text-blue-500" />, description: "JavaScript com tipagem estática", category: "Frontend" },
  { name: "TailwindCSS 3.3", emoji: "🎨", icon: <Palette className="w-8 h-8 text-teal-400" />, description: "Framework CSS utilitário", category: "Frontend" },
  { name: "ShadCN/UI", emoji: "🎭", icon: <Layers className="w-8 h-8 text-purple-400" />, description: "Componentes UI reutilizáveis", category: "Frontend" },
  { name: "Framer Motion 10.16", emoji: "✨", icon: <Sparkles className="w-8 h-8 text-pink-400" />, description: "Biblioteca de animações", category: "Frontend" },
  { name: "Recharts 2.8", emoji: "📊", icon: <BarChart3 className="w-8 h-8 text-green-400" />, description: "Biblioteca de gráficos", category: "Frontend" },
  
  // Backend
  { name: "NestJS 10.3", emoji: "🏗️", icon: <Building2 className="w-8 h-8 text-red-400" />, description: "Framework Node.js escalável", category: "Backend" },
  { name: "Node.js 22+", emoji: "🟢", icon: <Server className="w-8 h-8 text-green-500" />, description: "Runtime JavaScript", category: "Backend" },
  { name: "TypeScript 5.2", emoji: "🔷", icon: <Type className="w-8 h-8 text-blue-500" />, description: "JavaScript com tipagem estática", category: "Backend" },
  { name: "Prisma 5.7", emoji: "🔺", icon: <Database className="w-8 h-8 text-indigo-400" />, description: "ORM moderno para TypeScript", category: "Backend" },
  { name: "MySQL 8.0", emoji: "🗄️", icon: <Database className="w-8 h-8 text-orange-400" />, description: "Sistema de gerenciamento de banco", category: "Backend" },
  { name: "JWT", emoji: "🎫", icon: <Shield className="w-8 h-8 text-yellow-400" />, description: "Autenticação baseada em tokens", category: "Backend" },
  { name: "OpenAI 4.20", emoji: "🤖", icon: <Bot className="w-8 h-8 text-cyan-400" />, description: "API de inteligência artificial", category: "Backend" },
  { name: "Socket.io 4.7", emoji: "🔌", icon: <Plug className="w-8 h-8 text-purple-400" />, description: "Comunicação em tempo real", category: "Backend" },
  
  // Ferramentas
  { name: "Docker", emoji: "🐳", icon: <Container className="w-8 h-8 text-blue-400" />, description: "Containerização de aplicações", category: "Ferramentas" },
  { name: "Nginx", emoji: "🌐", icon: <Globe className="w-8 h-8 text-green-400" />, description: "Servidor web e proxy reverso", category: "Ferramentas" },
  { name: "Redis", emoji: "🔴", icon: <Circle className="w-8 h-8 text-red-500" />, description: "Banco de dados em memória", category: "Ferramentas" },
  { name: "GitHub Actions", emoji: "⚙️", icon: <GitBranch className="w-8 h-8 text-gray-400" />, description: "CI/CD automatizado", category: "Ferramentas" },
  { name: "ESLint & Prettier", emoji: "🔍", icon: <Search className="w-8 h-8 text-pink-400" />, description: "Ferramentas de qualidade de código", category: "Ferramentas" },
  { name: "Jest", emoji: "🧪", icon: <TestTube className="w-8 h-8 text-green-400" />, description: "Framework de testes", category: "Ferramentas" },
  
  // Segurança
  { name: "Rate Limiting", emoji: "🚦", icon: <Timer className="w-8 h-8 text-orange-400" />, description: "Controle de taxa de requisições", category: "Segurança" },
  { name: "Input Sanitization", emoji: "🧹", icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, description: "Sanitização de dados de entrada", category: "Segurança" },
  { name: "CORS", emoji: "🌍", icon: <Globe className="w-8 h-8 text-cyan-400" />, description: "Controle de acesso entre origens", category: "Segurança" },
  { name: "HTTPS/SSL", emoji: "🔒", icon: <Lock className="w-8 h-8 text-green-400" />, description: "Criptografia de comunicação", category: "Segurança" },
  { name: "JWT Rotation", emoji: "🔄", icon: <RotateCcw className="w-8 h-8 text-purple-400" />, description: "Rotação automática de tokens", category: "Segurança" },
  { name: "bcrypt", emoji: "🔐", icon: <Key className="w-8 h-8 text-yellow-400" />, description: "Hash seguro de senhas", category: "Segurança" },
];

const categoryColors = {
    Frontend: "from-blue-500/20 to-cyan-500/20",
    Backend: "from-green-500/20 to-emerald-500/20",
    Ferramentas: "from-purple-500/20 to-violet-500/20",
    Segurança: "from-red-500/20 to-orange-500/20",
};

const StackGrid: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const categories = Array.from(new Set(stackData.map(item => item.category)));

    return (
        <section id="stacks" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                        Stack Tecnológica
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Tecnologias e ferramentas que utilizo para criar soluções inovadoras e eficientes
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {categories.map((category) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.h3
                                className="text-2xl font-semibold text-white mb-6 text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {category}
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {stackData
                                    .filter(item => item.category === category)
                                    .map((item, index) => (
                                        <motion.div
                                            key={`${category}-${index}`}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                rotateY: 5,
                                                z: 50,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative"
                                        >
                                            <div className="glass rounded-xl p-6 h-full hover-lift cursor-pointer relative overflow-hidden">
                                                {/* Gradiente de fundo baseado na categoria */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                                {/* Conteúdo */}
                                                <div className="relative z-10">
                                                    <motion.div
                                                        className="mb-4 flex justify-center"
                                                        whileHover={{
                                                            rotate: [0, -10, 10, -10, 0],
                                                            scale: 1.2,
                                                        }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {item.icon}
                                                    </motion.div>

                                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                                                        {item.name}
                                                    </h4>

                                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* Efeito de brilho no hover */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                                    initial={{ x: "-100%" }}
                                                    whileHover={{ x: "100%" }}
                                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                                />

                                                {/* Partículas flutuantes */}
                                                <motion.div
                                                    className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100"
                                                    animate={{
                                                        y: [0, -10, 0],
                                                        opacity: [0, 1, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: 0.5,
                                                    }}
                                                />
                                                <motion.div
                                                    className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
                                                    animate={{
                                                        y: [0, -8, 0],
                                                        opacity: [0, 1, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        delay: 1,
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Estatísticas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Tecnologias", value: stackData.length },
                        { label: "Categorias", value: categories.length },
                        { label: "Anos de Experiência", value: "2" },
                        { label: "Projetos Concluídos", value: "1" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass rounded-xl p-6 text-center hover-lift"
                        >
                            <div className="text-3xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StackGrid;
