import { openrouter } from "../lib/ia";
import { streamText } from "ai";

export default {
  async generarReceta(prompt) {
    const resultado = streamText({
      model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      system:
        "Eres un bartender experto en bebidas" +
        "Ayudaras al usuario a que unicamente busque recetas de Bebidas",
      temperature: 0.3,
      prompt,
    });

    return resultado.textStream;
  },
};
