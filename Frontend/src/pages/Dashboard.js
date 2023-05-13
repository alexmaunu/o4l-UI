import { Link } from "react-router-dom"
import BreadCrumb from "../components/layouts/BreadCrumb"

const Dashboard = () => {
  return (
    <>
    <BreadCrumb currentPage="Dashboard" />
   <div className="rounded-lg mt-6">
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col py-10 px-12">
              <div className="flex justify-between">
                <h5 className="mb-1 text-2xl font-medium text-cyan-700 capitalize">Topic Generation</h5>
                <span className="text-green-600 text-4xl"><i className="fa-solid fa-briefcase"></i></span>
              </div>
              <span className="text-md font-light text-gray-500">Generate Ideas</span>
              <div className="flex mt-4 md:mt-6">
                  <Link to="/topic" className="flex justify-center items-center text-lg font-normal w-full text-white py-2 px-4 bg-cyan-600 rounded-md hover:bg-cyan-800">Visit page</Link>
              </div>
          </div>
      </div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col py-10 px-12">
              <div className="flex justify-between">
                <h5 className="mb-1 text-2xl font-medium text-cyan-700 capitalize">Content Expansion</h5>
                <span className="text-orange-600 text-4xl"><i className="fa-solid fa-envelope-open-text"></i></span>
              </div>
              <span className="text-md font-light text-gray-500">Generate Ideas</span>
              <div className="flex mt-4 md:mt-6">
                  <Link to="/expansion" className="flex justify-center items-center text-lg font-normal w-full text-white py-2 px-4 bg-cyan-600 rounded-md hover:bg-cyan-800">Visit page</Link>
              </div>
          </div>
      </div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col py-10 px-12">
              <div className="flex justify-between">
                <h5 className="mb-1 text-2xl font-medium text-cyan-700 capitalize">Content Repurposing</h5>
                <span className="text-4xl"><i className="fa-solid fa-globe"></i></span>
              </div>
              <span className="text-md font-light text-gray-500">Generate Ideas</span>
              <div className="flex mt-4 md:mt-6">
                  <Link to="/media-content" className="flex justify-center items-center text-lg font-normal w-full text-white py-2 px-4 bg-cyan-600 rounded-md hover:bg-cyan-800">Visit page</Link>
              </div>
          </div>
       </div>
      </div>
   </div>
</>
  )
}
export default Dashboard