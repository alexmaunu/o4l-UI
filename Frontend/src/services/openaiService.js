import axios from "axios";
 
export const getResponse = async (prompt,temperature, tokens, model) => {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL, {prompt, temperature, tokens, model});
    return response.data.result;
  }