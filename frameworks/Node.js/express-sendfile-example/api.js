//api
require('dotenv').config();

const got = require('got');



                         
async function getResponse(prompt) {
    const data = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
        
    requestOptions =  {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
                        },
                        body: JSON.stringify(data),
                         }


  const url = "https://api.openai.com/v1/engines/text-curie-001/completions";
  const params = data;
  const headers = requestOptions;
  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    output = `${prompt}${response.choices[0].text}`;
    console.log(output);
  } catch (err) {
    console.log(err);
  }
};
//  async function getResponse(prompt,res) {
// const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));



                        
//   let result = fetch("https://api.openai.com/v1/engines/text-curie-001/completions", requestOptions)
//                      .then(response =>{response.json()})
//                      .then(json => {res.status(200).json(json)})
//                      .catch(error => {
//                         console.error(error);
//                         res.status(500).send('An error occurred');
//                       })
//         return result;
//   }




module.exports = { getResponse }