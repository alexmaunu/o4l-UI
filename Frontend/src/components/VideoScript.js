import { forwardRef, useImperativeHandle, useState } from "react";
import { getResponse } from "../services/openaiService";


const VideoScript = forwardRef(({tone, temperature, model, tokens}, ref) => {
    const [topic, setTopic] = useState("");
  // send data tp the parent component (Form)
    useImperativeHandle(ref, ()=>({
        async VideoScript(){
        let prompt = `Write a script for a 2-minute ${tone} promotional video the topic is : [${topic}]`;
        const result = await getResponse(prompt,parseFloat(temperature), parseInt(tokens), model);
        return result;
        }
  }));

  return (
    <div className="mb-6">
        <label htmlFor="topic" className="block mb-2 text-sm font-medium text-cyan-600">Primary keyword</label>
        <input type="text" id="topic" minLength={3} maxLength={200} value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Digital marketing in 2023" name="topic" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500" required/>
    </div>
  )
})
export default VideoScript