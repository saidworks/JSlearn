const got = require('got');
require('dotenv').config();
const prompt = "Write a poem about a dog wearing skis";





 async function getResponse(){
     

  const url = 'https://api.openai.com/v1/engines/text-curie-001/completions';
  const params = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
    
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
    
  };
  try {
    return await got.post(url, { json: params, headers: headers },{ retry: { limit: 3, methods: ["GET", "POST"] }}).json();
    
  } catch (err) {
    console.log(err);
  }
 
};
console.log(getResponse());
