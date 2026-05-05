// Selecionando os elementos do DOM
const inputTemp = document.getElementById('inputTemp');
const inputAr = document.getElementById('inputAr');
const inputSolo = document.getElementById('inputSolo');

const txtTemp = document.getElementById('txtTemp');
const txtAr = document.getElementById('txtAr');
const txtSolo = document.getElementById('txtSolo');

const statusTexto = document.getElementById('status-texto');
const feedbackDetalle = document.getElementById('feedback-detalhe');
const plantaImg = document.getElementById('planta-img');
const painel = document.querySelector('.painel-status');

// Função principal do simulador
function atualizarSimulador() {
    // Pegando os valores atuais dos sliders
    const temp = parseInt(inputTemp.value);
    const ar = parseInt(inputAr.value);
    const solo = parseInt(inputSolo.value);

    // Atualiza os números que aparecem na tela
    txtTemp.innerText = temp;
    txtAr.innerText = ar;
    txtSolo.innerText = solo;

    // Definição de variáveis de estado
    let mensagem = "";
    let emoji = "🍅";
    let corFundo = "#f1f8e9"; // Verde claro (Ideal)
    let corTexto = "#2e7d32";

    // LÓGICA DE EQUILÍBRIO (O coração do projeto Agrinho)
    
    // 1. Verificação de Temperatura (Ideal: 20-26°C)
    if (temp < 15) {
        mensagem = "Muito frio! O crescimento do tomateiro estagnou.";
        emoji = "❄️";
        corFundo = "#e3f2fd"; // Azul claro
        corTexto = "#1565c0";
    } else if (temp > 30) {
        mensagem = "Calor excessivo! As flores podem cair sem dar frutos.";
        emoji = "🔥";
        corFundo = "#fff3e0"; // Laranja claro
        corTexto = "#e65100";
    } 
    // 2. Verificação de Solo (Ideal: 60-80%)
    else if (solo < 40) {
        mensagem = "Solo muito seco! A planta está desidratando.";
        emoji = "🍂";
        corFundo = "#efebe9"; // Marrom acinzentado
        corTexto = "#5d4037";
    } else if (solo > 90) {
        mensagem = "Cuidado! Solo encharcado desperdiça água e apodrece raízes.";
        emoji = "💧";
        corFundo = "#e1f5fe";
        corTexto = "#0277bd";
    }
    // 3. Verificação de Umidade do Ar (Ideal: 50-70%)
    else if (ar > 80) {
        mensagem = "Ar muito úmido! Ambiente propenso a fungos e pragas.";
        emoji = "🍄";
        corFundo = "#f3e5f5"; // Roxo claro
        corTexto = "#7b1fa2";
    }
    // Se passar por todos os testes e estiver no intervalo ideal:
    else {
        mensagem = "Equilíbrio perfeito! Produção alta e uso consciente de recursos.";
        emoji = "🍅";
        corFundo = "#c8e6c9"; // Verde sucesso
        corTexto = "#2e7d32";
    }

    // Aplicando as mudanças no HTML/CSS
    statusTexto.innerText = (corTexto === "#2e7d32") ? "Ambiente Sustentável" : "Ajuste Necessário";
    statusTexto.style.color = corTexto;