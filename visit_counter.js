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
            this.showError();
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
        const localCount = localStorage.getItem('localVisitCount') || '1';
        this.displayCount(parseInt(localCount));
        
        // Incrementar contador local ocasionalmente
        const lastIncrement = localStorage.getItem('lastLocalIncrement');
        const now = Date.now();
        const oneHour = 60 * 60 * 1000;
        
        if (!lastIncrement || (now - parseInt(lastIncrement)) > oneHour) {
            const newCount = parseInt(localCount) + Math.floor(Math.random() * 3) + 1;
            localStorage.setItem('localVisitCount', newCount.toString());
            localStorage.setItem('lastLocalIncrement', now.toString());
            this.displayCount(newCount);
        }
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