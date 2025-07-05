# 📊 Configuração do Contador de Visitas

## Arquivos Criados

Para implementar o contador de visitas baseado em IP, foram criados os seguintes arquivos:

### 1. `visit_counter.php`
- **Função**: Script PHP que registra e conta visitantes únicos por IP
- **Características**:
  - Registra IP real do visitante
  - Permite nova contagem após 24 horas
  - Armazena dados em arquivo JSON
  - Retorna contagem em formato JSON

### 2. `visit_counter.js`
- **Função**: Script JavaScript que faz requisições para o PHP
- **Características**:
  - Atualiza contador automaticamente
  - Fallback local caso PHP não funcione
  - Estilização integrada ao design do site
  - Tratamento de erros

### 3. `.htaccess`
- **Função**: Configurações do servidor Apache
- **Características**:
  - Habilita execução de PHP
  - Configura CORS para requisições AJAX
  - Protege arquivo de dados
  - Configurações de cache e segurança

### 4. `visits_data.json` (será criado automaticamente)
- **Função**: Arquivo de dados que armazena os IPs e timestamps
- **Localização**: Será criado automaticamente pelo PHP
- **Formato**: JSON com estrutura `{"ip": timestamp}`

## 📋 Instruções para Upload na Hospedagem

### Arquivos que DEVEM ser enviados:
1. ✅ `visit_counter.php`
2. ✅ `visit_counter.js`
3. ✅ `.htaccess`
4. ✅ `index.html` (atualizado)

### Arquivos que NÃO precisam ser enviados:
- ❌ `CONTADOR_SETUP.md` (este arquivo de instruções)
- ❌ `visits_data.json` (será criado automaticamente)

## 🔧 Configuração na Hospedagem

### 1. Verificar Suporte PHP
- Certifique-se que sua hospedagem suporta PHP 7.0+
- Verifique se as funções `file_get_contents()` e `file_put_contents()` estão habilitadas

### 2. Permissões de Arquivo
- O diretório deve ter permissão de escrita (755 ou 777)
- O PHP precisa poder criar o arquivo `visits_data.json`

### 3. Teste do Funcionamento
- Acesse: `https://seudominio.com/visit_counter.php`
- Deve retornar algo como: `{"success":true,"unique_visits":1,"visitor_ip":"xxx.xxx.xxx.xxx","timestamp":1234567890}`

## 🚨 Solução de Problemas

### Se o contador não funcionar:
1. **Verifique o console do navegador** (F12) para erros JavaScript
2. **Teste o PHP diretamente** acessando `visit_counter.php`
3. **Verifique permissões** do diretório na hospedagem
4. **Confirme suporte PHP** com seu provedor de hospedagem

### Fallback Automático:
- Se o PHP não funcionar, o sistema usa um contador local
- O contador local simula incrementos ocasionais
- Não é ideal, mas mantém a funcionalidade básica

## 📈 Como Funciona

1. **Visitante acessa o site**
2. **JavaScript faz requisição** para `visit_counter.php`
3. **PHP obtém IP real** do visitante
4. **Verifica se IP já visitou** nas últimas 24h
5. **Se novo ou após 24h**: registra visita e **incrementa contador total**
6. **Retorna contagem total cumulativa** (nunca diminui)
7. **JavaScript atualiza** o número na tela

### 🔢 Sistema de Contagem:
- **Contador Total**: Sempre aumenta, nunca reseta
- **Controle por IP**: Cada IP só pode adicionar +1 a cada 24 horas
- **Exemplo**: Se 100 pessoas visitaram hoje e 50 visitaram ontem, o contador mostra 150 (não 100)

## 🔒 Segurança

- Arquivo de dados protegido via `.htaccess`
- IPs são armazenados apenas para contagem
- Limpeza automática de dados antigos (>24h)
- Proteção contra acesso direto aos arquivos sensíveis

---

**Desenvolvido para ROX XP Calculator**  
*Sistema de contador de visitas personalizado*