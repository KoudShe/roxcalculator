// Sistema de contador de visitas com registro de IP
class VisitCounter {
    constructor(apiUrl = 'visit_counter.php') {
        this.apiUrl = apiUrl;
        this.counterElement = null;
    }

    // Inicializar o contador
    async init(elementId = 'visitCounter') {
        this.counterElement = document.getElementById(elementId);
        if (!this.counterElement) {
            console.error('Elemento do contador não encontrado:', elementId);
            return;
        }

        try {
            await this.updateCounter();
        } catch (error) {
            console.error('Erro ao inicializar contador:', error);
            this.showError();
        }
    }

    // Fazer requisição para o PHP e atualizar contador
    async updateCounter() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success) {
                this.displayCount(data.unique_visits);
                console.log('Contador atualizado:', data);
            } else {
                throw new Error('Resposta inválida do servidor');
            }
        } catch (error) {
            console.error('Erro ao buscar dados do contador:', error);
            console.log('PHP não disponível, usando contador local');
            this.initLocalFallback();
        }
    }

    // Exibir contagem na tela
    displayCount(count) {
        if (this.counterElement) {
            this.counterElement.textContent = count.toLocaleString();
            this.counterElement.style.color = '#00d4ff';
            this.counterElement.style.fontWeight = 'bold';
        }
    }

    // Exibir erro
    showError() {
        if (this.counterElement) {
            this.counterElement.textContent = 'Erro';
            this.counterElement.style.color = '#ff6b6b';
        }
    }

    // Fallback para contador local (caso o PHP não funcione)
    initLocalFallback() {
        const STORAGE_KEY = 'roxcalculator_visits';
        const VISITOR_KEY = 'roxcalculator_visitor_id';
        const LAST_VISIT_KEY = 'roxcalculator_last_visit';
        
        // Gerar ID único para o visitante se não existir
        let visitorId = localStorage.getItem(VISITOR_KEY);
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem(VISITOR_KEY, visitorId);
        }
        
        // Verificar última visita
        const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 horas em milissegundos
        
        // Carregar contador atual (começar com 150+ como mostrado no site)
        let currentCount = parseInt(localStorage.getItem(STORAGE_KEY)) || 150;
        
        // Se é uma nova visita (primeira vez ou após 24h)
        if (!lastVisit || (now - parseInt(lastVisit)) > twentyFourHours) {
            currentCount++;
            localStorage.setItem(STORAGE_KEY, currentCount.toString());
            localStorage.setItem(LAST_VISIT_KEY, now.toString());
            console.log('Nova visita registrada. Total:', currentCount);
        } else {
            console.log('Visitante já contabilizado nas últimas 24h. Total:', currentCount);
        }
        
        // Mostrar o contador
        this.displayCount(currentCount);
    }
}

// Inicializar quando a página carregar
window.addEventListener('load', async () => {
    const counter = new VisitCounter();
    
    try {
        await counter.init('visitCounter');
    } catch (error) {
        console.log('Usando fallback local para o contador');
        counter.initLocalFallback();
    }
});

// Exportar para uso global
window.VisitCounter = VisitCounter;
