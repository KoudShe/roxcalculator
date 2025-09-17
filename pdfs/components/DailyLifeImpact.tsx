import React from 'react'
import { motion } from 'framer-motion'
import {Briefcase, Users, Target, Coffee} from 'lucide-react'


const DailyLifeImpact = () => {
  const impacts = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Trabalho e Carreira",
      description: "Falta de confiança se reflete na performance profissional",
      effects: ["Menos assertividade em reuniões", "Evita desafios e promoções", "Dificuldade de concentração"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Vida Social",
      description: "Isolamento e evitação de situações sociais",
      effects: ["Recusa convites e eventos", "Evita conversas sobre relacionamentos", "Perda de amizades"]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Objetivos Pessoais",
      description: "Perda de motivação para alcançar metas",
      effects: ["Abandona projetos pessoais", "Falta de energia para hobbies", "Procrastinação constante"]
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-400" />,
      title: "Saúde Mental",
      description: "Impacto direto no bem-estar psicológico",
      effects: ["Insônia e distúrbios do sono", "Perda de apetite", "Irritabilidade constante"]
    }
  ]


  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-purple-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Isso Afeta Seu{' '}
            <span className="text-indigo-400">Dia a Dia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Problemas de performance sexual criam um efeito dominó que impacta todas as áreas da sua vida...
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {impact.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center">
                {impact.title}
              </h3>
              <p className="text-gray-400 text-sm text-center mb-4">
                {impact.description}
              </p>
              <ul className="space-y-2">
                {impact.effects.map((effect, effectIndex) => (
                  <li key={effectIndex} className="text-gray-300 text-xs flex items-start space-x-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              O Ciclo Vicioso da Baixa Performance
            </h3>
            <p className="text-gray-300">
              Cada área afetada alimenta as outras, criando uma espiral descendente difícil de quebrar sozinho.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl mb-3">😰</div>
              <h4 className="text-white font-bold mb-2">Ansiedade</h4>
              <p className="text-gray-400 text-sm">Medo do próximo encontro íntimo</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl mb-3">😔</div>
              <h4 className="text-white font-bold mb-2">Evitação</h4>
              <p className="text-gray-400 text-sm">Fuga de situações íntimas e sociais</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl mb-3">😞</div>
              <h4 className="text-white font-bold mb-2">Isolamento</h4>
              <p className="text-gray-400 text-sm">Distanciamento de pessoas e atividades</p>
            </div>
          </div>


          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-white mb-4">
              Mas existe uma forma de quebrar esse ciclo...
            </p>
            <p className="text-gray-300">
              E ela é mais simples e natural do que você imagina.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export default DailyLifeImpact
