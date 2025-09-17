import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {Clock, Shield, Heart, Sparkles, ArrowRight, Play, X} from 'lucide-react'

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Função para parar o vídeo quando o modal for fechado
  const stopVideo = () => {
    setShowModal(false);
    // Dar tempo para a animação de fechamento antes de resetar o iframe
    setTimeout(() => {
      const iframe = document.getElementById('heroVideoModal') as HTMLIFrameElement;
      if (iframe) {
        const src = iframe.src;
        iframe.src = src;
      }
    }, 300);
  };
  
  // Adicionar event listener para a tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        stopVideo();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 py-10 sm:py-20 overflow-hidden">
      {/* Dark Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.ibb.co/tMshDJbz/bg.png)',
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      ></div>
       
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
       
      {/* Gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-36 sm:w-72 h-36 sm:h-72 bg-primary-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-secondary-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Removed floating particles effect */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="mb-8">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-500/40 shadow-glow">
                  <Clock className="w-6 h-6 text-primary-300" />
                  <span className="text-primary-200 font-medium">Solução Comprovada</span>
                  <Shield className="w-6 h-6 text-secondary-300" />
                </div>
              </div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-primary-100 to-secondary-100 bg-clip-text text-transparent leading-tight mb-4 lg:mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Dure Mais Tempo
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-300 relative inline-block">
                  na Cama
                  <motion.span 
                    className="absolute -right-4 sm:-right-6 lg:-right-8 -top-4 sm:-top-6 lg:-top-8"
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 5, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-6 lg:mb-8 drop-shadow-md px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra o método natural que já transformou a vida íntima de{' '}
                <span className="text-primary-300 font-semibold">mais de 50.000 homens</span>{' '}
                superando definitivamente a ejaculação precoce e disfunção erétil
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a 
                  href="#offer" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Quero Resolver Isso Agora</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </a>
                
                <div className="flex items-center space-x-2 text-gray-300">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                  <span className="text-sm sm:text-base">Garantia de 30 dias</span>
                </div>
              </motion.div>

              {/* Movido para depois do primeiro botão e antes do segundo */}

            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 my-8">
                <div className="flex items-center space-x-2 text-green-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Resultados Permanentes</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Sem Efeitos Colaterais</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 max-w-2xl mx-auto lg:mx-0 bg-black/20 p-3 rounded-lg backdrop-blur-sm">
                ⚡ Acesso imediato após a compra • 📱 Disponível em todos os dispositivos • 🔒 Compra 100% segura
              </p>
            </motion.div>
          </motion.div>

          {/* Image Side - Couple in bed with disappointed man */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/20 z-10"></div> 
               <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative group cursor-pointer" onClick={() => setShowModal(true)}>
                 <iframe
                   src="https://player.vimeo.com/video/1118573707?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1&amp;controls=0&amp;loop=1"
                   allow="autoplay; fullscreen; picture-in-picture"
                   className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                   title="Vídeo"
                   frameBorder="0"
                   id="mainVideo"
                   onContextMenu={(e) => e.preventDefault()}
                   onDragStart={(e) => e.preventDefault()}
                   style={{userSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none'}}
                 ></iframe>
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                   <div className="bg-white/20 rounded-full p-3 sm:p-4 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-110 transform">
                     <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white fill-current" />
                   </div>
                 </div>
               </div>
                
               {/* Emotional overlay */} 
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 lg:p-8 z-20"> 
                 <div className="text-white"> 
                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-red-400 text-center"> 
                     "Não aguento mais essa frustração..." 
                   </h3> 
                   <p className="text-gray-200 text-xs sm:text-sm lg:text-base text-center sm:text-left"> 
                     A ejaculação precoce e disfunção erétil destroem a autoestima e os relacionamentos 
                   </p> 
                 </div> 
               </div> 
             </div> 
  
             {/* Floating statistics with better contrast */} 
             <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-2xl z-30 border border-red-400/30"> 
               <div className="text-center"> 
                 <div className="text-lg sm:text-xl lg:text-2xl font-bold">73%</div> 
                 <div className="text-xs">dos homens sofrem</div> 
                 <div className="text-xs">com esse problema</div> 
               </div> 
             </div> 
  
             <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-gradient-to-r from-blue-700 to-purple-700 text-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-2xl z-30 border border-blue-400/30"> 
               <div className="text-center"> 
                 <div className="text-lg sm:text-xl lg:text-2xl font-bold">2min</div> 
                 <div className="text-xs">tempo médio</div> 
                 <div className="text-xs">na cama</div> 
               </div> 
             </div>
          </motion.div>
        </div>
      </div>
      {/* Modal para reprodução do vídeo com áudio */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <button 
              onClick={stopVideo} 
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
              <iframe 
                id="heroVideoModal"
                src="https://player.vimeo.com/video/1118573707?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=0&amp;controls=0&amp;background=1"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero