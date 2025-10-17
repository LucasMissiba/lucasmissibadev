'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, User, Calendar } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carregar comentários do localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem('lucas-missiba-comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Salvar comentários no localStorage
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem('lucas-missiba-comments', JSON.stringify(updatedComments));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.message.trim()) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setIsSubmitting(true);

    // Simular delay de envio
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        name: newComment.name.trim(),
        message: newComment.message.trim(),
        timestamp: new Date().toLocaleString('pt-BR')
      };

      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      saveComments(updatedComments);
      
      setNewComment({ name: '', message: '' });
      setIsSubmitting(false);
      
      alert('Comentário adicionado com sucesso!');
    }, 1000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="comentarios" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Comentários
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deixe sua mensagem! Seus comentários ficarão expostos aqui para sempre.
          </p>
        </motion.div>

        {/* Formulário de comentário */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-semibold text-white">Deixe seu comentário</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu nome"
                  maxLength={50}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  value={newComment.message}
                  onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Digite sua mensagem aqui..."
                  maxLength={500}
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {newComment.message.length}/500 caracteres
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Comentário</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Lista de comentários */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {comments.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Nenhum comentário ainda. Seja o primeiro!</p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Comentários ({comments.length})
              </h3>
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">
                          {comment.name}
                        </h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {comment.timestamp}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {comment.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CommentsSection;
