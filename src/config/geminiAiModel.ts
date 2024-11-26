const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 30 seconds video on topic: Interesting historical story and facts along with AI image prompt in anime format for each scene and give me result in JSON format with imagePrompt and ContentText as fields\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "I can provide you with a JSON structure containing the script and AI image prompts for a 30-second anime-style video about an interesting historical story.\n\nThis script focuses on the story of the discovery of the Rosetta Stone.  Adjust the timing to fit your video editing software's capabilities.  Each scene is roughly 5 seconds long to total approximately 30 seconds.\n\n```json\n[\n  {\n    \"imagePrompt\": \"Anime style, vibrant colors, bustling ancient Egyptian marketplace, hieroglyphs on buildings, sun shining, bustling crowd, detailed clothing\",\n    \"contentText\": \"Ancient Egypt, 196 BC.  Life thrived along the Nile, a civilization shrouded in mystery...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, close-up on a weathered stone slab, partially buried in sand, hieroglyphs clearly visible, dramatic lighting, slightly faded colors\",\n    \"contentText\": \"Then, in 1799, a discovery changed everything...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, French soldiers in Napoleonic uniforms, discovering the Rosetta Stone, dramatic lighting, sense of wonder and discovery\",\n    \"contentText\": \"A French soldier, near the town of Rosetta, unearthed a stone...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, close-up on the Rosetta Stone, highlighting the different scripts (hieroglyphs, Demotic, Greek), detailed and accurate depiction\",\n    \"contentText\": \"...bearing three scripts: hieroglyphs, Demotic, and ancient Greek.\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, scholars gathered around a table, studying the Rosetta Stone, books and quill pens scattered, intense expressions, dimly lit room\",\n    \"contentText\": \"Scholars raced to decipher the hieroglyphs...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, Jean-François Champollion, a young scholar, with a triumphant expression, holding the Rosetta Stone, light shining upon him\",\n    \"contentText\": \"...and Jean-François Champollion cracked the code!\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, vibrant depiction of ancient Egyptian life, now with understanding thanks to the Rosetta Stone, temples, pharaohs, everyday life\",\n    \"contentText\": \"Unlocking the secrets of a lost civilization.\"\n  }\n]\n```\n\n"},
        ],
      },
    ],
  });
