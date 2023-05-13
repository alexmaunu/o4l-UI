
import Button from "./layouts/Button";
import { useState, useRef, createContext } from "react";
import BlogArticle from "./BlogArticle";
import SocialMediaPosts from "./SocialMediaPosts";
import VideoScript from "./VideoScript";
import Content from "./Content";
import PropTypes from 'prop-types';
import BreadCrumb from "./layouts/BreadCrumb";


export const generatedTextContext = createContext();

const FormsReporpusing = () => {
    const [formData, setFormData] = useState({
        temperature:0.7,
        tone:"Empathetic",
        model:"text-davinci-003",
        tokens:256,
        useCase:"BLOG_ARTICLE",
        loading:false,
        generatedText:null
        });
    const {tone, useCase, temperature, model, tokens, generatedText, loading} = formData;
    const formReference = useRef();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({...formData, loading:true});
    let result;
     if(useCase === "BLOG_ARTICLE"){
        result = await formReference.current.BlogArticle();
    } else if(useCase === "SOCIAL_MEDIA"){
        result = await formReference.current.SocialMedia();
    } else if(useCase === "VIDEO_SCRIPTS"){
        result = await formReference.current.VideoScript();
    }
    setFormData({...formData, generatedText:result, loading:false});
 }
  return (
    <section className="flex justify-center flex-col">
        <BreadCrumb currentPage="Content Repurposing" />
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="grid lg:grid-cols-3 gap-4">
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
            <div className="mb-6">
                  <label htmlFor="tokens" className="block mb-2 text-md font-medium text-cyan-600">Max Tokens</label>
                  <input type="number" min={10} max={2048} value={tokens} onChange={handleChange} name="tokens" id="tokens"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none" placeholder="10" required/>
              </div>
              <div className="mb-6">
                <label htmlFor="useCase" className="block mb-2 text-md font-medium text-cyan-600">Choose a use case</label>
                <select name="useCase" id="useCase" value={useCase} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none">
                    <option value="BLOG_ARTICLE">Blog Article</option>
                    <option value="SOCIAL_MEDIA">Social Media Posts</option>
                    <option value="VIDEO_SCRIPTS">Video Scripts</option>
                </select>
            </div>
            </div>
            {useCase === "BLOG_ARTICLE" ? (<>
                <BlogArticle ref={formReference} tone={tone} model={model} temperature={temperature} tokens={tokens}/>
            </>):(<></>)}
            {useCase === "SOCIAL_MEDIA" ? (<>
                <SocialMediaPosts ref={formReference} tone={tone} model={model} temperature={temperature} tokens={tokens}/>
            </>):(<></>)}
            {useCase === "VIDEO_SCRIPTS" ? (<>
                <VideoScript ref={formReference} tone={tone} model={model} temperature={temperature} tokens={tokens}/>
            </>):(<></>)}
            <Button btnText="Generate content" loading={loading}/>
        </form>
        {generatedText && <Content generatedText={generatedText} loading={loading} />}
    </section>
  )
}
FormsReporpusing.propTypes = {
    model:PropTypes.string,
    tone:PropTypes.string,
    tokens:PropTypes.number,
    temperature:PropTypes.number,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
  }
export default FormsReporpusing