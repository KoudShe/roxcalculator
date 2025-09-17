import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import PsychologicalImpact from './components/PsychologicalImpact'
import RelationshipImpact from './components/RelationshipImpact'
import DailyLifeImpact from './components/DailyLifeImpact'
import MedicationDangers from './components/MedicationDangers'
import NaturalSolution from './components/NaturalSolution'
import FinalOffer from './components/FinalOffer'
import Footer from './components/Footer'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Controle de exibição do botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  
  const scrollToTop = () => {
    // Efeito de partículas explosivas
    const button = document.querySelector('[aria-label="Voltar ao topo"]') as HTMLElement;
    if (button) {
      const rect = button.getBoundingClientRect();
      // Criar partículas
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          bottom: ${rect.bottom - window.innerHeight + button.offsetHeight/2}px;
          right: ${window.innerWidth - rect.right + button.offsetWidth/2}px;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          animation: explode${i} 0.8s ease-out forwards;
        `;
        
        // Criar animação única para cada partícula
        const angle = (i * 30) * Math.PI / 180;
        const distance = 60 + Math.random() * 40;
        const keyframes = `
          @keyframes explode${i} {
            0% {
              opacity: 1;
              transform: scale(1) translate(0, 0);
            }
            100% {
              opacity: 0;
              transform: scale(0.3) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px);
            }
          }
        `;
        
        // Adicionar keyframes ao documento
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        document.body.appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
          if (document.body.contains(particle)) {
            document.body.removeChild(particle);
          }
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        }, 800);
      }
    }
    
    // Scroll suave para o topo
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <PainPoints />
        <PsychologicalImpact />
        <RelationshipImpact />
        <DailyLifeImpact />
        <MedicationDangers />
        <NaturalSolution />
        <FinalOffer />
        <Footer />
      </motion.div>
      
      {/* Container para os botões flutuantes */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 9999
        }}
      >

        {/* Botão de voltar ao topo */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

export default App