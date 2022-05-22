require('dotenv').config();
const ai = require('openai');
const configuration = new ai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new ai.OpenAIApi(configuration);

async function getResponse(req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: req.body.prompt,
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}


module.exports = { getResponse }
