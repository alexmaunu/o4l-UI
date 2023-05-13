import GeneralForm from "../components/GeneralForm"
import BreadCrumb from "../components/layouts/BreadCrumb"

const GenerateTopic = () => {
  return (
    <>
      <BreadCrumb currentPage="Generate Topic" />
      <div className="lg:pb-32 lg:pt-6 md:pb-12 md:pt-4 sm:py-6">
        <GeneralForm btnText="Generate Topics" type="TOPIC" label2="What is your topic about?" minLength={4}/>
        <hr className="my-8 border-gray-300 sm:mx-auto dark:border-gray-700"/>
        <h3 className="lg:text-4xl font-normal text-center sm:text-xl sm:my-6">Audience and Demographic Targeting</h3>
        <GeneralForm btnText="Generate Topics" type="TOPIC_CHOSEN" label2="Topic chosen" minLength={4}/>
      </div>
    </>
  )
}
export default GenerateTopic