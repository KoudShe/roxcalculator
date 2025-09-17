import React from 'react'
import { motion } from 'framer-motion'
import {AlertTriangle, Pill, Heart, Skull} from 'lucide-react'

const MedicationDangers = () => {
  const sideEffects = [
    {
      category: "Cardiovasculares",
      icon: <Heart className="w-6 h-6 text-red-400" />,
      effects: ["Problemas cardíacos", "Pressão arterial irregular", "Risco de infarto"]
    },
    {
      category: "Neurológicos",
      icon: <Skull className="w-6 h-6 text-purple-400" />,
      effects: ["Dores de cabeça severas", "Tonturas", "Perda de memória"]
    },
    {
      category: "Digestivos",
      icon: <Pill className="w-6 h-6 text-orange-400" />,
      effects: ["Náuseas constantes", "Problemas estomacais", "Perda de apetite"]
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-orange-900/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Os <span className="text-red-400">Perigos</span> dos Medicamentos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Antes de recorrer a pílulas e remédios, você precisa conhecer os riscos reais...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <span>Efeitos Colaterais Graves</span>
              </h3>
              
              <div className="space-y-6">
                {sideEffects.map((category, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-3">
                      {category.icon}
                      <h4 className="font-bold text-white">{category.category}</h4>
                    </div>
                    <ul className="space-y-1">
                      {category.effects.map((effect, effectIndex) => (
                        <li key={effectIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                ⚠️ Dependência e Tolerância
              </h3>
              <p className="text-gray-300 mb-4">
                Medicamentos para disfunção erétil podem criar dependência psicológica e física,
                exigindo doses cada vez maiores para o mesmo efeito.
              </p>
              <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                <p className="text-red-300 font-medium text-sm">
                  "Sem o remédio, muitos homens se tornam completamente incapazes de ter uma ereção natural."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Custos Financeiros Ocultos
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="text-white">Viagra (4 comprimidos)</span>
                  <span className="text-red-400 font-bold">R$ 120-180</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <span className="text-white">Cialis (4 comprimidos)</span>
                  <span className="text-orange-400 font-bold">R$ 150-220</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <span className="text-white">Consultas médicas</span>
                  <span className="text-yellow-400 font-bold">R$ 200-400</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
                <p className="text-white font-bold text-center mb-2">
                  Gasto anual estimado:
                </p>
                <p className="text-red-400 font-bold text-3xl text-center">
                  R$ 3.000 - R$ 8.000
                </p>
                <p className="text-gray-300 text-sm text-center mt-2">
                  E isso é só o começo... Os custos aumentam com o tempo.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                🚫 Contraindicações Perigosas
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Problemas cardíacos (pode ser fatal)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Pressão arterial baixa ou alta</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Uso de nitratos (medicamentos cardíacos)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Problemas hepáticos ou renais</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-3">
                Existe um Caminho Melhor
              </h3>
              <p className="text-gray-300">
                Uma solução natural, sem efeitos colaterais, sem dependência e com resultados permanentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MedicationDangers