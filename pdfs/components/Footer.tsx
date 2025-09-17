import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Shield, Clock, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 relative overflow-hidden border-t border-slate-700/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Transforme Sua Vida Sexual <span className="text-primary-400">Hoje Mesmo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Junte-se aos milhares de homens que já recuperaram sua confiança e satisfação sexual
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-bold text-white mb-2">100% Seguro</h3>
            <p className="text-gray-400 text-sm">
              Método natural testado e aprovado por especialistas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Resultados Rápidos</h3>
            <p className="text-gray-400 text-sm">
              Primeiros resultados visíveis em até 21 dias
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Relacionamentos</h3>
            <p className="text-gray-400 text-sm">
              Melhore a satisfação e intimidade com sua parceira
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-slate-700/50 pt-8"
        >
          <div className="mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              GARANTIR MEU ACESSO AGORA
            </motion.button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">webcompany@gmail.com</span>
            </div>
          </div>

          <div className="text-gray-500 text-sm space-y-2">
            <p>© {new Date().getFullYear()} <span className="text-primary-400">Sexual Performance</span> • Todos os direitos reservados</p>
            <p>Este produto não substitui orientação médica profissional.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer