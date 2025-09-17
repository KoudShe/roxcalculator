import React from 'react'
import { motion } from 'framer-motion'
import {Brain, Cloud, Lightbulb} from 'lucide-react'

const PsychologicalImpact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Impacto na Sua{' '}
            <span className="text-purple-400">Mente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Problemas de performance sexual vão muito além do físico...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <Cloud className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Ansiedade de Performance</h3>
              </div>
              <p className="text-gray-300">
                O medo constante de falhar novamente cria um ciclo vicioso onde a ansiedade
                antecipada piora ainda mais o problema, gerando um estado mental de constante preocupação.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <Lightbulb className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-white">Baixa Autoestima</h3>
              </div>
              <p className="text-gray-300">
                Começar a questionar sua masculinidade e valor como homem, afetando não apenas
                a vida íntima, mas também a confiança em outras áreas da vida.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <Brain className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-bold text-white">Depressão e Isolamento</h3>
              </div>
              <p className="text-gray-300">
                O sentimento de inadequação pode levar ao isolamento social e até mesmo
                episódios depressivos, criando uma espiral descendente difícil de quebrar.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Você Não Está Sozinho
              </h3>
              <p className="text-gray-300 mb-6">
                Estudos mostram que problemas de performance sexual afetam:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <span className="text-white font-medium">Homens entre 18-30 anos</span>
                <span className="text-purple-400 font-bold text-xl">35%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <span className="text-white font-medium">Homens entre 30-45 anos</span>
                <span className="text-blue-400 font-bold text-xl">48%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <span className="text-white font-medium">Impacto na saúde mental</span>
                <span className="text-red-400 font-bold text-xl">78%</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
              <p className="text-white font-medium text-center">
                "A boa notícia é que existe uma solução natural e definitiva para isso."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PsychologicalImpact