/*import { OpenAI } from "openai";
class Translation {
  constructor(apiKey) {
    this.openai = new OpenAI(apiKey);
    this.apiKey = apiKey;
    this.text = "";
    this.sourceLanguage = "";
    this.targetLanguage = "";
  }

  async translate() {
    const completion = await this.openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Traduza o seguinte texto do ${this.sourceLanguage} para ${this.targetLanguage}: ${this.text}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
}

export default Translation;
*/
