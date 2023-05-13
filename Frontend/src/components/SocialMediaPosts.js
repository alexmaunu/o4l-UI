import { forwardRef, useImperativeHandle, useState } from "react";
import { getResponse } from "../services/openaiService";
import PropTypes from 'prop-types';



const SocialMediaPosts = forwardRef(({tone, temperature, model, tokens}, ref) => {
    const [topic, setTopic] = useState("");
    const [socialMediaType, setSocialMediaType] = useState("Facebook");
  // send data tp the parent component (Form)
    useImperativeHandle(ref, ()=>({
        async SocialMedia (){
        let prompt = `Generate a ${socialMediaType} post about [${topic}]. 
        it should be written in a ${tone} tone as if it's being posted by a person.`;
        const result = await getResponse(prompt,parseFloat(temperature), parseInt(tokens), model);
        return result;
        }
  }));

  return (
    <>
     <div className="grid lg:grid-cols-2 gap-3">
     <div className="mb-6">
          <label htmlFor="socialMediaType" className="block mb-2 text-md font-medium text-cyan-600">Social Media Type</label>
          <select value={socialMediaType} onChange={(e)=>setSocialMediaType(e.target.value)} name="socialMediaType" id="socialMediaType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 focus:outline-none">
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Youtube">Youtube</option>
              <option value="Twitter">Twitter</option>
          </select>
        </div>
        <div className="mb-6">
            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-cyan-600">Primary keyword</label>
            <input type="text" id="topic" minLength={3} maxLength={300} value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Digital marketing in 2023" name="topic" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500" required/>
        </div>
     </div>
    </>
  )
})
SocialMediaPosts.propTypes = {
  topic:PropTypes.string,
  socialMediaType:PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
}
export default SocialMediaPosts