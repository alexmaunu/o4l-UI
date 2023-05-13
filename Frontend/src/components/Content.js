import Spinner from "./layouts/Spinner";
import ReactMarkdown from 'react-markdown';

import {useState} from "react";


const Content = ({loading, generatedText}) => {
  const [isSuccess, setIsSuccess]= useState(false);

  const copyToClip = () => {
    navigator.clipboard.writeText(generatedText);
    setIsSuccess(true);
    setTimeout(()=>{
      setIsSuccess(false);
    }, 3000)
  }
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      {!loading && generatedText && <ReactMarkdown className="text-normal text-gray-900 font-normal" children={generatedText} />
      }
      {loading &&<div className="flex items-center justify-center spinnerH"><Spinner /></div>}
      { generatedText && 
          <div className="cursor-pointer text-cyan-600 font-semibold mt-4 text-lg hover:text-cyan-700" onClick={copyToClip}><i className="fa-regular fa-copy"></i>
          <span className="ml-2">Copy to Clipboard</span>
        </div>}
      {isSuccess && <p className="text-md text-green-500 font-light">The text is copied</p>}
    </div>
  )
}
export default Content
