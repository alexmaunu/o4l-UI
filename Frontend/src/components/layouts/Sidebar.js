import React, { createContext, useContext } from 'react';
import {Link} from 'react-router-dom';

export const SidebarContext = createContext();


const Sidebar = () => {
   const {open} = useContext(SidebarContext);
  return (
      <>
        <aside className={`fixed top-0 left-0 z-40 w-64 ${open ? '' :'-translate-x-full' } h-screen pt-20 transition-transform bg-white shadow-md sm:translate-x-0`}>
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white relative">
                <ul className="space-y-2">
                  <li>
                      <Link to="/" className="flex my-6 items-center p-2 text-base font-normal text-cyan-700 rounded-lg hover:bg-cyan-500">
                        <i className="fa-solid fa-gauge"></i>
                        <span className="ml-3">Dashboard</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/topic" className="flex mb-6 items-center p-2 text-base font-normal text-cyan-700 rounded-lg hover:bg-cyan-500">
                        <i className="fa-solid fa-briefcase"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Topic Generation</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/expansion" className="flex mb-6 items-center p-2 text-base font-normal text-cyan-700 rounded-lg hover:bg-cyan-500">
                        <i className="fa-solid fa-envelope-open-text"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Content Expansion</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="media-content" className="flex mb-6 items-center p-2 text-base font-normal text-cyan-700 rounded-lg hover:bg-cyan-500">
                        <i className="fa-solid fa-globe"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Content Repurposing</span>
                      </Link>
                  </li>
                </ul>
            </div>
          </aside>
      </>
  )
}
export default Sidebar