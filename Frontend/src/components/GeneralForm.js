import Content from "./Content";
import {getResponse} from "../services/openaiService";
import { forwardRef, useState } from "react";
import PropTypes from 'prop-types';
import Button from "./layouts/Button";


const GeneralForm = forwardRef(({ label2, type, btnText, minLength}, generalFormRef) => {
  const [showButton, setShowButton] = useState(false);
  const [formData, setFormData] = useState({
    temperature:0.7,
    tone:"caring",
    model:"text-davinci-003",
    message:"",
    tokens:256,
    loading:false,
    loading2:false,
    loading3:false,
    generatedText:null
  });
  const {tone,temperature, model, tokens, message, generatedText, loading, loading2, loading3} = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  
  const continueParagraph = async () => {
    setFormData({...formData, loading3:true});
    const prompt = `Please continue the following text:[${generatedText}].`;
    const result = await getResponse(prompt,parseFloat(temperature), parseInt(tokens), model);
    setFormData({...formData, generatedText:result, loading3:false});
  }
  const generateHeadline = async () => {
    setFormData({...formData, loading2:true});
    const prompt = `Write a ${tone} Headline for the following text:[${generatedText}]`;
    const result = await getResponse(prompt,parseFloat(temperature), parseInt(tokens), model);
    setFormData({...formData, generatedText:result, loading2:false});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({...formData, loading:true});
    setShowButton(true);
    console.log(showButton);
    let prompt;
    if(type === "TOPIC"){
        prompt = `Please Generate a list of 5 "${tone}" blog Topics about (${message}).`
    } else if(type === "TOPIC_CHOSEN"){
        prompt = `Provide a summary of key statistics and demographics related to (${message}), including the prevalence of types 1 and 2, the most common age group affected, and any trends in incidence, in a ${tone} way.`
    } else if(type === "EXPANSION"){
        prompt = `Write a blog article exploring the benefits and drawbacks of [${message}]. Discuss the history, current state, and future prospects of the idea, and provide real-life examples, case studies and statistics to support your arguments. Conclude with your own thoughts on the idea and its potential impact, in a [${tone}] way.`
    } 
    const result = await getResponse(prompt,parseFloat(temperature), parseInt(tokens), model);
    setFormData({...formData, generatedText:result, loading:false});
 }
 
  return (
   <>
     <section ref={generalFormRef} className="flex justify-center flex-col">
      <div className=""> 
        <form onSubmit={handleSubmit} className="mb-6">
           <div className="grid lg:grid-cols-3 gap-3">
           <div className="mb-6">
                <label htmlFor="model" className="block mb-2 text-md font-medium text-cyan-600">Model</label>
                <select value={model} onChange={handleChange} name="model" id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none">
                    <option value="text-davinci-003">Davinci</option>
                    <option value="text-curie-001">Curie</option>
                    <option value="text-babbage-001">Babbage</option>
                    <option value="text-adda-001">Adda</option>
                </select>
            </div>
           <div className="mb-6">
                <label htmlFor="tone" className="block mb-2 text-md font-medium text-cyan-600">Tone of Voice</label>
                <select value={tone} onChange={handleChange} name="tone" id="tone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none">
                  <option value="caring">Caring</option>
                    <option value="empathetic">Empathetic</option>
                    <option value="informative">Informative</option>
                    <option value="solution focused">Solution Focused</option>
                </select>
            </div>
            <div className="mb-6">
                <label htmlFor="temperature" className="block mb-2 text-md font-medium text-cyan-600">Temperature</label>
                <input type="number" step={0.1} min={0} max={1} value={temperature} onChange={handleChange} name="temperature" id="temperature" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none" required/>
            </div>
           </div>
           <div className="grid lg:grid-cols-2 gap-3">
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-md font-medium text-cyan-600">{label2}</label>
                <input id="message" minLength={minLength} value={message} onChange={handleChange} name="message" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none" placeholder={label2} required />
                <p className="mt-2 text-sm text-gray-400">Be as specific as you can don't write less than 10 characters.</p>
              </div>
              <div className="mb-6">
                  <label htmlFor="tokens" className="block mb-2 text-md font-medium text-cyan-600">Max Tokens</label>
                  <input type="number" min={10} max={2048} value={tokens} onChange={handleChange} name="tokens" id="tokens"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none" placeholder="10" required/>
              </div>
            </div>
          <Button btnText={btnText} loading={loading}/>
        </form>
        {type === "EXPANSION" && generatedText && showButton && <button disabled={loading3} onClick={continueParagraph} className="mb-6 inline-flex mr-5 items-center px-3 py-2 text-sm font-medium text-center hover:text-white hover:bg-cyan-600 rounded-lg bg-transparent text-cyan-600 border border-cyan-600 focus:outline-none">
        {loading3 && <div className="border-x-cyan-600 border-y-cyan-300 border-2 animate-spin inline-block w-6 h-6 rounded-full mr-3"></div>}
              Continue Text
              <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
          </button>}
        {type === "EXPANSION" && generatedText && 
          <button disabled={loading2} onClick={generateHeadline} className="mb-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:text-white hover:bg-orange-600 rounded-lg bg-transparent text-orange-600 border border-orange-600 focus:outline-none">
            {loading2 && <div className="border-x-orange-600 border-y-orange-300 border-2 animate-spin inline-block w-6 h-6 rounded-full mr-3"></div>}
            Generate Headline
          </button>
        }
       {generatedText && <Content generatedText={generatedText} loading={loading} />}
      </div>
     </section>
   </>
  )
})
GeneralForm.propTypes = {
  message:PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
}
export default GeneralForm