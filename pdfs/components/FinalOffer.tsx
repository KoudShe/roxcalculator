import React from 'react'
import { motion } from 'framer-motion'
import {Clock, Gift, Shield, Star, CheckCircle, ArrowRight, MessageCircleDashed as MessageCircle, Sparkles} from 'lucide-react'

const FinalOffer = () => {
  const bonuses = [
    "Guia de Exercícios Específicos",
    "Técnicas de Respiração Avançadas",
    "Manual de Nutrição para Performance",
    "Suporte por E-mail por 90 dias"
  ]

  const guarantees = [
    "Ajuda/conversa online 8 horas por dia",
    "Resultados em até 21 dias",
    "Método 100% testado",
    "Suporte especializado"
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="offer">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/20 via-secondary-800/20 to-primary-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-500/10 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full border border-secondary-500/30 shadow-glow">
              <Gift className="w-16 h-16 text-secondary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">Oferta Especial</span> por Tempo Limitado
            <motion.span 
              className="absolute -right-8 -top-8"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 5, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforme sua vida sexual hoje mesmo com nossa solução completa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 mb-8 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold">OFERTA LIMITADA</span>
            </div>
            
            <div className="mb-6">
              <div className="text-gray-400 text-lg line-through mb-2">De R$ 197,00</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 mb-2">
                R$ <span>19</span>,90
              </div>
              <div className="text-gray-300">ou 12x de R$ 1,99</div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-500/30 mb-6 shadow-glow-red">
              <p className="text-white font-bold">
                🔥 Desconto de 90% - Apenas hoje!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-primary-500/30 hover:shadow-glow-primary transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 shadow-glow-yellow">
                  <Star className="w-10 h-10 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-center mb-6">Bônus Exclusivos</h3>
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-0.5 group-hover:text-primary-300 transition-colors duration-300" />
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{bonus}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-secondary-500/30 hover:shadow-glow-secondary transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-secondary-500/20 to-blue-500/20 rounded-full border border-secondary-500/30 shadow-glow-secondary">
                  <Shield className="w-10 h-10 text-secondary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500 text-center mb-6">Nossa Garantia</h3>
              <ul className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0 mt-0.5 group-hover:text-secondary-300 transition-colors duration-300" />
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.a 
              href="https://pay.hotmart.com/X101943658T" 
              className="group relative block w-full py-5 px-6 bg-gradient-to-r from-accent-500 to-primary-500 text-white font-bold rounded-lg text-center text-lg shadow-glow-accent hover:shadow-glow-accent-lg transition-all duration-300 mb-6 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                QUERO TRANSFORMAR MINHA VIDA SEXUAL
                <motion.span 
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <div className="mt-4 flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-300 ml-2">Avaliação 4.9/5 (2.847 clientes)</span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              🔒 Compra 100% segura | Suporte online 8h/dia | Acesso imediato
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">
            ⚡ Últimas 24 horas com desconto!
          </h3>
          <p className="text-gray-300">
            Não perca esta oportunidade única de transformar sua vida sexual para sempre
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalOffer