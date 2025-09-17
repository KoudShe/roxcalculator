import React from 'react'
import { motion } from 'framer-motion'
import {Frown, AlertCircle, Zap, Clock} from 'lucide-react'


const PainPoints = () => {
  const frustrations = [
    {
      icon: <Frown className="w-10 h-10 text-red-400" />,
      title: "A Frustração de Não Conseguir Satisfazer",
      description: "Aquela sensação terrível de decepção no olhar da sua parceira quando tudo termina antes mesmo de começar..."
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-orange-400" />,
      title: "O Medo Constante do Próximo Encontro",
      description: "Evitar momentos íntimos por medo de mais uma decepção, criando um ciclo vicioso de ansiedade e evitação..."
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "A Perda da Confiança Masculina",
      description: "Sentir que não é 'homem o suficiente' e que está falhando no papel mais básico da masculinidade..."
    }
  ]


  return (
    <section className="py-20 px-4 relative overflow-hidden" id="pain-points">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30">
              <Clock className="w-8 h-8 text-red-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Você Conhece Essa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Frustração</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Se você chegou até aqui, provavelmente já viveu momentos como estes...
          </p>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">
          {frustrations.map((frustration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/30 hover:shadow-glow hover:shadow-red-500/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full">
                  {frustration.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {frustration.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{frustration.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <p className="text-2xl font-bold text-white mb-4">
              Se você se identificou com pelo menos uma dessas situações...
            </p>
            <p className="text-lg text-gray-300">
              Então você precisa conhecer a solução que vai mudar sua vida para sempre.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export default PainPoints