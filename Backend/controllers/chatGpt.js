const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

const postPrompt = async(req, res)=>{
    const {prompt, temperature, tokens, model}= req.body;
    console.log(req.body);
    let completion;
    try {
        completion = await openai.createCompletion({
            model: model,
            prompt: prompt,
            max_tokens:tokens,
            temperature:temperature
        });
    } catch (error) {
        res.status(401);
        console.log(error);
    }
    res.status(200).json({result:completion.data.choices[0].text})
}

module.exports = {postPrompt}