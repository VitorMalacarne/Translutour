const openai = require('openai');

// Configuração da sua chave de API
const openaiApiKey = 'SUA_CHAVE_DE_API';

async function iniciarConversa() {
    try {
        const resposta = await openai.Completion.create({
            engine: 'text-davinci-003', // ou 'text-davinci' para GPT-3.5
            prompt: 'Traduza o seguinte texto para francês: Eu sou um bom programador!',
            max_tokens: 150, // Tamanho máximo da resposta
            temperature: 0.7, // Temperatura da amostra (0 a 1)
            stop: '\n', // Pára na nova linha
        }, { apiKey: openaiApiKey });

        console.log(resposta.data.choices[0].text.trim());
    } catch (error) {
        console.error('Erro ao iniciar a conversa:', error);
    }
}

iniciarConversa();
