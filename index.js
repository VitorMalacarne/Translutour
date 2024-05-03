const { GPT } = require("openai");

const apiKey = "";
const prompt = "Escreva sua mensagem ou prompt aqui.";

const gpt = new GPT({
  apiKey: apiKey,
});

async function main() {
  try {
    const response = await gpt.createCompletion({
      engine: "text-davinci-003",
      prompt: prompt,
      maxTokens: 50, // Número máximo de tokens de resposta
    });

    console.log("Resposta do GPT-3:", response.data.choices[0].text.trim());
  } catch (error) {
    console.error("Erro ao fazer a solicitação para a API do GPT-3:", error);
  }
}

main();
