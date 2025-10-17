'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão Hospitalar - Alocama",
    description: "Plataforma web completa para gestão de equipamentos hospitalares e propostas comerciais",
    longDescription: "Desenvolvimento de uma plataforma web completa para gestão de equipamentos hospitalares e propostas comerciais da Alocama, empresa especializada em equipamentos médicos e hospitalares. Sistema que automatiza completamente o processo de propostas comerciais, reduzindo em 70% o tempo de criação de orçamentos.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "PHP 8.0+", "MySQL", "JWT", "WebGL"],
    category: "Full Stack",
    status: "completed",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Portal do Tribunal de Justiça",
    description: "Portal web para consulta de processos judiciais durante estágio",
    longDescription: "Portal desenvolvido durante estágio no TJRJ para facilitar consultas de processos judiciais, com interface intuitiva e sistema de busca avançada. Melhorou significativamente o acesso à informação para advogados e cidadãos.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    category: "Full Stack",
    status: "completed",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Sistema de Autenticação JWT",
    description: "API robusta de autenticação com JWT e controle de permissões",
    longDescription: "Sistema de autenticação completo com JWT, refresh tokens, controle de permissões multi-nível e rate limiting. Implementa segurança avançada com proteção contra XSS, CSRF e ataques de força bruta.",
    technologies: ["PHP 8.0+", "MySQL", "JWT", "CORS", "Rate Limiting", "XSS Protection"],
    category: "Backend",
    status: "completed",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Dashboard de Gestão - Alocama",
    description: "Dashboard com métricas em tempo real e analytics avançados",
    longDescription: "Dashboard de gestão com métricas em tempo real, analytics avançados e relatórios automatizados. Centraliza informações de vendas, equipamentos e performance da equipe comercial.",
    technologies: ["JavaScript ES6+", "Chart.js", "WebGL", "LocalStorage", "RESTful APIs"],
    category: "Frontend",
    status: "completed",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Catálogo Digital de Equipamentos",
    description: "Catálogo digital com 200+ equipamentos hospitalares",
    longDescription: "Catálogo digital completo com mais de 200 equipamentos hospitalares, sistema de busca avançada, filtros inteligentes e integração com sistema de propostas. Interface responsiva com animações CSS e WebGL.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WebGL", "Responsive Design", "LocalStorage"],
    category: "Frontend",
    status: "completed",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const categoryColors = {
  'Full Stack': 'from-blue-500/20 to-cyan-500/20',
  'Frontend': 'from-green-500/20 to-emerald-500/20',
  'Backend': 'from-purple-500/20 to-violet-500/20',
};

const statusColors = {
  'completed': 'text-green-400 bg-green-400/20',
  'in-progress': 'text-yellow-400 bg-yellow-400/20',
  'planned': 'text-blue-400 bg-blue-400/20',
};

const statusLabels = {
  'completed': 'Concluído',
  'in-progress': 'Em Desenvolvimento',
  'planned': 'Planejado',
};

const ProjectsSection: React.FC = () => {
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
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Principais Projetos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada como desenvolvedor
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover-lift cursor-pointer relative overflow-hidden">
                {/* Gradiente de fundo baseado na categoria */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category as keyof typeof categoryColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Header do projeto */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                          {statusLabels[project.status]}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-md group-hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group/link"
                      >
                        <Github size={16} className="text-white group-hover/link:text-gray-300" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group/link"
                      >
                        <ExternalLink size={16} className="text-white group-hover/link:text-gray-300" />
                      </motion.a>
                    )}
                  </div>
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estatísticas dos projetos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: "Projetos Concluídos", value: projects.filter(p => p.status === 'completed').length },
            { icon: Database, label: "Tecnologias", value: "15+" },
            { icon: Globe, label: "Categorias", value: "3" },
            { icon: Code, label: "Em Desenvolvimento", value: projects.filter(p => p.status === 'in-progress').length },
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
              <stat.icon size={32} className="text-white mx-auto mb-3" />
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

export default ProjectsSection;
