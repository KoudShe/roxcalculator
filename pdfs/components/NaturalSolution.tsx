import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Heart, Shield, Zap, Users, Star, Sparkles } from 'lucide-react'

const NaturalSolution = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-primary-900/30 to-slate-900 py-20 px-4 overflow-hidden" id="solution">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full border border-accent-500/30 shadow-glow-accent">
              <Heart className="w-16 h-16 text-accent-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative inline-block">
            A Solução{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              Natural
            </span>
            <motion.span 
              className="absolute -right-12 -top-8"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 5, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Sparkles className="w-10 h-10 text-accent-400" />
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra o método revolucionário que está transformando a vida íntima de milhares de homens ao redor do mundo, sem medicamentos, sem efeitos colaterais.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Shield className="w-10 h-10 text-accent-400" />,
              title: "100% Natural",
              description: "Sem químicos ou medicamentos"
            },
            {
              icon: <Zap className="w-10 h-10 text-primary-400" />,
              title: "Resultados Rápidos",
              description: "Primeiros resultados em 7 dias"
            },
            {
              icon: <Heart className="w-10 h-10 text-secondary-400" />,
              title: "Sem Efeitos Colaterais",
              description: "Método seguro e testado"
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-primary-400" />,
              title: "Garantia Total",
              description: "30 dias para testar"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-accent-500/30 hover:shadow-glow-accent transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full mb-4 border border-accent-500/20">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Method Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-green-500/30"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O Método Que Está Revolucionando a Vida Íntima Masculina
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Baseado em técnicas milenares e validado pela ciência moderna, nosso método trabalha com o corpo de forma natural, 
              fortalecendo os músculos corretos e reprogramando os reflexos neurológicos responsáveis pelo controle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Fortalecimento Muscular",
                description: "Exercícios específicos para fortalecer o assoalho pélvico e músculos PC"
              },
              {
                step: "02",
                title: "Controle Respiratório",
                description: "Técnicas de respiração que controlam a excitação e prolongam o prazer"
              },
              {
                step: "03",
                title: "Reprogramação Mental",
                description: "Métodos para eliminar a ansiedade e aumentar a confiança na cama"
              }
            ].map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-400 to-blue-400 text-slate-900 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {technique.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{technique.title}</h4>
                <p className="text-gray-300">{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformação{' '}
                <span className="text-green-400">Comprovada</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Milhares de homens já recuperaram sua confiança e transformaram seus relacionamentos usando nosso método natural.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Seção de Provas Sociais - Resultados Comprovados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resultados{' '}
              <span className="text-blue-400">Comprovados</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja o que nossos clientes estão dizendo sobre os resultados obtidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de Carlos"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Carlos M.</h4>
                  <p className="text-gray-400 text-sm">34 anos, São Paulo</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Em apenas 3 semanas consegui controlar completamente minha ejaculação. Minha esposa notou a diferença imediatamente. Nossa intimidade melhorou 1000%!"
              </p>
              <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                <p className="text-green-300 text-xs font-medium">
                  ✅ Resultado: De 30 segundos para mais de 15 minutos
                </p>
              </div>
            </motion.div>

            {/* Depoimento 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de Roberto"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Roberto S.</h4>
                  <p className="text-gray-400 text-sm">41 anos, Rio de Janeiro</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Sofria com disfunção erétil há anos. Depois de seguir o método, voltei a ter ereções firmes e duradouras. Me sinto um homem novo aos 41 anos!"
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                <p className="text-blue-300 text-xs font-medium">
                  ✅ Resultado: Ereções 90% mais firmes em 4 semanas
                </p>
              </div>
            </motion.div>

            {/* Depoimento 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de André"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">André L.</h4>
                  <p className="text-gray-400 text-sm">28 anos, Belo Horizonte</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Estava quase desistindo do meu relacionamento por causa dos problemas na cama. O método salvou minha relação! Agora temos uma vida sexual incrível."
              </p>
              <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                <p className="text-purple-300 text-xs font-medium">
                  ✅ Resultado: Relacionamento salvo + confiança recuperada
                </p>
              </div>
            </motion.div>

            {/* Depoimento 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de Fernando"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Fernando R.</h4>
                  <p className="text-gray-400 text-sm">37 anos, Porto Alegre</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Tentei vários remédios e nada funcionava. Com este método natural, em 2 meses estava completamente curado. Sem efeitos colaterais!"
              </p>
              <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                <p className="text-green-300 text-xs font-medium">
                  ✅ Resultado: 100% natural, sem medicamentos
                </p>
              </div>
            </motion.div>

            {/* Depoimento 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de Marcos"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Marcos T.</h4>
                  <p className="text-gray-400 text-sm">45 anos, Brasília</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Aos 45 anos pensava que era tarde demais. O método me provou o contrário! Hoje tenho mais vigor do que aos 25. Minha esposa está radiante!"
              </p>
              <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-500/30">
                <p className="text-orange-300 text-xs font-medium">
                  ✅ Resultado: Vigor renovado aos 45 anos
                </p>
              </div>
            </motion.div>

            {/* Depoimento 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Foto de perfil de Paulo"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Paulo H.</h4>
                  <p className="text-gray-400 text-sm">32 anos, Salvador</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Estava gastando uma fortuna em remédios. Este método me salvou financeiramente e sexualmente! Resultados permanentes por uma fração do custo."
              </p>
              <div className="bg-teal-500/20 rounded-lg p-3 border border-teal-500/30">
                <p className="text-teal-300 text-xs font-medium">
                  ✅ Resultado: Economia + resultados permanentes
                </p>
              </div>
            </motion.div>
          </div>

          {/* Estatísticas de Sucesso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
          >
            <h4 className="text-2xl font-bold text-white mb-6 text-center">
              📊 Estatísticas de Sucesso
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
                <p className="text-gray-300">Dos homens reportaram melhora significativa em 30 dias</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
                <p className="text-gray-300">Conseguiram controle total da ejaculação</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">91%</div>
                <p className="text-gray-300">Relataram melhora nas ereções</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-green-500/30"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Pronto Para Transformar Sua Vida?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de homens que já recuperaram sua confiança e transformaram seus relacionamentos.
          </p>
          <div className="flex justify-center space-x-4 text-green-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mt-4">
            <span className="font-bold text-white">4.9/5</span> - Baseado em mais de 10.000 avaliações
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default NaturalSolution