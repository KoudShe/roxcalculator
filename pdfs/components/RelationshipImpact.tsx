import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {Heart, Users, MessageCircleDashed as MessageCircle, Play} from 'lucide-react'

const RelationshipImpact = () => {
  useEffect(() => {
    // Carrega o script do Vimeo dinamicamente
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Remove o script quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section className="py-10 sm:py-16 lg:py-20 px-2 sm:px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-red-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <Heart className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-pink-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            O Impacto na Sua{' '}
            <span className="text-pink-400">Parceira</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Problemas de performance não afetam apenas você... Eles impactam diretamente quem você ama.
          </p>
        </motion.div>

        {/* Card centralizado - ocupando toda a largura */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Seção de Vídeo do Vimeo - Centralizada */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-pink-500/30 max-w-2xl w-full">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
              💔 O Que Elas Realmente Pensam
              <br />
              <span className="text-xs sm:text-sm text-gray-300 font-normal">
                (Mas não têm coragem de falar)
              </span>
            </h3>
            
            <div className="max-w-md mx-auto mb-4 sm:mb-6 text-center">
              <p className="text-gray-300 italic text-sm sm:text-base">"As mulheres raramente expressam suas verdadeiras frustrações sobre problemas de performance"</p>
            </div>
            
            {/* Grid 2x2 Centralizado */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              {/* Vídeo 1 */}
              <div className="relative group cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // Criar um modal para exibir o vídeo
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black';
                
                // Função para parar o vídeo
                const stopVideo = () => {
                  // Remover o modal
                  if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                  }
                  
                  // Reativar outros vídeos quando fechar o modal
                  document.querySelectorAll('video, iframe').forEach(el => {
                    const element = el as HTMLVideoElement | HTMLIFrameElement;
                    if (element.id !== 'mainVideo' && 'muted' in element) {
                      (element as HTMLVideoElement).muted = false;
                    }
                  });
                };
                
                // Fechar o modal ao clicar fora do vídeo
                modal.onclick = stopVideo;
                
                // Conteúdo do modal
                const modalContent = document.createElement('div');
                modalContent.className = 'relative w-full max-w-4xl mx-auto';
                modalContent.onclick = (e) => e.stopPropagation();
                
                // Iframe do Vimeo com autoplay e loop
                const videoContainer = document.createElement('div');
                videoContainer.className = 'relative aspect-video';
                videoContainer.innerHTML = `<iframe 
                  src="https://player.vimeo.com/video/1118597737?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=0&amp;controls=0&amp;background=1" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  class="absolute inset-0 w-full h-full" 
                  frameborder="0" 
                  id="mainVideo" 
                  data-ready="true"
                ></iframe>`;
                
                // Silenciar outros vídeos
                document.querySelectorAll('video, iframe').forEach(el => {
                  const element = el as HTMLVideoElement | HTMLIFrameElement;
                  if (element.id !== 'mainVideo' && 'muted' in element) {
                    (element as HTMLVideoElement).muted = true;
                  }
                });
                
                // Botão de fechar
                const closeButton = document.createElement('button');
                closeButton.className = 'absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white z-10';
                closeButton.innerHTML = '✕';
                closeButton.onclick = (e) => {
                  e.stopPropagation();
                  stopVideo();
                };
                
                // Adicionar evento para fechar com a tecla ESC
                const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') {
                    stopVideo();
                    document.removeEventListener('keydown', handleKeyDown);
                  }
                };
                document.addEventListener('keydown', handleKeyDown);
                
                modalContent.appendChild(videoContainer);
                modalContent.appendChild(closeButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
              }}>
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-pink-400/30">
                  <div className="aspect-video bg-gradient-to-br from-pink-600/30 to-purple-600/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <iframe 
                          src="https://player.vimeo.com/video/1118597737?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1&amp;controls=0" 
                          allow="autoplay; fullscreen; picture-in-picture" 
                          className="absolute inset-0 w-full h-full object-cover select-none" 
                          title="Vídeo" 
                          frameBorder="0"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{userSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none'}}
                        ></iframe>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-all">
                            <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vídeo 2 - "O problema sou eu?" com modal */}
              <div className="relative group cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // Criar um modal para exibir o vídeo
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black';
                
                // Função para parar o vídeo
                const stopVideo = () => {
                  // Remover o modal
                  if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                  }
                  
                  // Reativar outros vídeos quando fechar o modal
                  document.querySelectorAll('video, iframe').forEach(el => {
                    const element = el as HTMLVideoElement | HTMLIFrameElement;
                    if (element.id !== 'modalVideo2' && 'muted' in element) {
                      (element as HTMLVideoElement).muted = false;
                    }
                  });
                };
                
                // Fechar o modal ao clicar fora do vídeo
                modal.onclick = stopVideo;
                
                // Conteúdo do modal
                const modalContent = document.createElement('div');
                modalContent.className = 'relative w-full max-w-4xl mx-auto';
                modalContent.onclick = (e) => e.stopPropagation();
                
                // Iframe do Vimeo com autoplay e loop
                const videoContainer = document.createElement('div');
                videoContainer.className = 'relative aspect-video';
                videoContainer.innerHTML = `<iframe 
                  src="https://player.vimeo.com/video/1118617181?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=0&amp;controls=0&amp;background=1" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  class="absolute inset-0 w-full h-full" 
                  frameborder="0" 
                  id="modalVideo2" 
                  data-ready="true"
                ></iframe>`;
                
                // Silenciar outros vídeos
                document.querySelectorAll('video, iframe').forEach(el => {
                  const element = el as HTMLVideoElement | HTMLIFrameElement;
                  if (element.id !== 'modalVideo2' && 'muted' in element) {
                    (element as HTMLVideoElement).muted = true;
                  }
                });
                
                // Botão de fechar
                const closeButton = document.createElement('button');
                closeButton.className = 'absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white z-10';
                closeButton.innerHTML = '✕';
                closeButton.onclick = (e) => {
                  e.stopPropagation();
                  stopVideo();
                };
                
                // Adicionar evento para fechar com a tecla ESC
                const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') {
                    stopVideo();
                    document.removeEventListener('keydown', handleKeyDown);
                  }
                };
                document.addEventListener('keydown', handleKeyDown);
                
                modalContent.appendChild(videoContainer);
                modalContent.appendChild(closeButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
              }}>
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-purple-400/30">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <iframe 
                          src="https://player.vimeo.com/video/1118617181?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1&amp;controls=0" 
                          allow="autoplay; fullscreen; picture-in-picture" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          title="Vídeo" 
                          frameBorder="0" 
                        ></iframe>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-all">
                            <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vídeo 3 - "Não tenho coragem..." com modal */}
              <div className="relative group cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // Criar um modal para exibir o vídeo
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black';
                
                // Função para parar o vídeo
                const stopVideo = () => {
                  // Remover o modal
                  if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                  }
                  
                  // Reativar outros vídeos quando fechar o modal
                  document.querySelectorAll('video, iframe').forEach(el => {
                    const element = el as HTMLVideoElement | HTMLIFrameElement;
                    if (element.id !== 'modalVideo3' && 'muted' in element) {
                      (element as HTMLVideoElement).muted = false;
                    }
                  });
                };
                
                // Fechar o modal ao clicar fora do vídeo
                modal.onclick = stopVideo;
                
                // Conteúdo do modal
                const modalContent = document.createElement('div');
                modalContent.className = 'relative w-full max-w-4xl mx-auto';
                modalContent.onclick = (e) => e.stopPropagation();
                
                // Iframe do Vimeo com autoplay e loop
                const videoContainer = document.createElement('div');
                videoContainer.className = 'relative aspect-video';
                videoContainer.innerHTML = `<iframe 
                  src="https://player.vimeo.com/video/1118621557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=0&amp;controls=0&amp;background=1" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  class="absolute inset-0 w-full h-full" 
                  frameborder="0" 
                  id="modalVideo3" 
                  data-ready="true"
                ></iframe>`;
                
                // Silenciar outros vídeos
                document.querySelectorAll('video, iframe').forEach(el => {
                  const element = el as HTMLVideoElement | HTMLIFrameElement;
                  if (element.id !== 'modalVideo3' && 'muted' in element) {
                    (element as HTMLVideoElement).muted = true;
                  }
                });
                
                // Botão de fechar
                const closeButton = document.createElement('button');
                closeButton.className = 'absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white z-10';
                closeButton.innerHTML = '✕';
                closeButton.onclick = (e) => {
                  e.stopPropagation();
                  stopVideo();
                };
                
                // Adicionar evento para fechar com a tecla ESC
                const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') {
                    stopVideo();
                    document.removeEventListener('keydown', handleKeyDown);
                  }
                };
                document.addEventListener('keydown', handleKeyDown);
                
                modalContent.appendChild(videoContainer);
                modalContent.appendChild(closeButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
              }}>
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-blue-400/30">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/30 to-teal-600/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <iframe 
                          src="https://player.vimeo.com/video/1118621557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1&amp;controls=0" 
                          allow="autoplay; fullscreen; picture-in-picture" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          title="Vídeo" 
                          frameBorder="0" 
                        ></iframe>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-all">
                            <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vídeo 4 - "Evito falar sobre..." com modal */}
              <div className="relative group cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // Criar um modal para exibir o vídeo
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black';
                
                // Função para parar o vídeo
                const stopVideo = () => {
                  // Remover o modal
                  if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                  }
                  
                  // Reativar outros vídeos quando fechar o modal
                  document.querySelectorAll('video, iframe').forEach(el => {
                    const element = el as HTMLVideoElement | HTMLIFrameElement;
                    if (element.id !== 'modalVideo4' && 'muted' in element) {
                      (element as HTMLVideoElement).muted = false;
                    }
                  });
                };
                
                // Fechar o modal ao clicar fora do vídeo
                modal.onclick = stopVideo;
                
                // Conteúdo do modal
                const modalContent = document.createElement('div');
                modalContent.className = 'relative w-full max-w-4xl mx-auto';
                modalContent.onclick = (e) => e.stopPropagation();
                
                // Iframe do Vimeo com autoplay e loop
                const videoContainer = document.createElement('div');
                videoContainer.className = 'relative aspect-video';
                videoContainer.innerHTML = `<iframe 
                  src="https://player.vimeo.com/video/1118731659?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=0&amp;controls=0&amp;background=1" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  class="absolute inset-0 w-full h-full" 
                  frameborder="0" 
                  id="modalVideo4" 
                  data-ready="true"
                ></iframe>`;
                
                // Silenciar outros vídeos
                document.querySelectorAll('video, iframe').forEach(el => {
                  const element = el as HTMLVideoElement | HTMLIFrameElement;
                  if (element.id !== 'modalVideo4' && 'muted' in element) {
                    (element as HTMLVideoElement).muted = true;
                  }
                });
                
                // Botão de fechar
                const closeButton = document.createElement('button');
                closeButton.className = 'absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white z-10';
                closeButton.innerHTML = '✕';
                closeButton.onclick = (e) => {
                  e.stopPropagation();
                  stopVideo();
                };
                
                // Adicionar evento para fechar com a tecla ESC
                const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') {
                    stopVideo();
                    document.removeEventListener('keydown', handleKeyDown);
                  }
                };
                document.addEventListener('keydown', handleKeyDown);
                
                modalContent.appendChild(videoContainer);
                modalContent.appendChild(closeButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
              }}>
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-red-400/30">
                  <div className="aspect-video bg-gradient-to-br from-red-600/30 to-pink-600/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <iframe 
                          src="https://player.vimeo.com/video/1118731659?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;background=1&amp;controls=0" 
                          allow="autoplay; fullscreen; picture-in-picture" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          title="Vídeo" 
                          frameBorder="0" 
                        ></iframe>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm hover:bg-white/30 transition-all">
                            <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-400/30">
              <p className="text-white text-sm text-center font-medium">
                ⚠️ <span className="text-red-300">A verdade que ela não conta:</span>
                <br />
                "Elas mentem para proteger seu ego, mas sofrem em silêncio."
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Seção adicional para completar o layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Não Deixe Isso Destruir Seu Relacionamento
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Intimidade Perdida</h4>
                <p className="text-gray-300 text-sm">A conexão íntima entre vocês se desgasta com o tempo</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Distância Emocional</h4>
                <p className="text-gray-300 text-sm">Vocês começam a se afastar e a relação esfria</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Comunicação Quebrada</h4>
                <p className="text-gray-300 text-sm">O diálogo sobre intimidade simplesmente desaparece</p>
              </div>
            </div>

            {/* Botão QUERO TRANSFORMAR MINHA VIDA ÍNTIMA */}
            <div className="flex justify-center mb-8">
              <a href="https://pay.hotmart.com/X101943658T" className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-8 lg:px-12 rounded-2xl text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-2xl w-full max-w-md block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <span className="relative flex items-center justify-center">
                  <span>QUERO TRANSFORMAR MINHA VIDA ÍNTIMA</span>
                </span>
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
              <p className="text-white font-medium text-lg">
                "Resolver isso não é apenas por você...
                <br />
                <span className="text-yellow-400">É por vocês dois."</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RelationshipImpact