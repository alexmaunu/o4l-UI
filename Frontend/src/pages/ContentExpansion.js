import GeneralForm from "../components/GeneralForm"
import BreadCrumb from "../components/layouts/BreadCrumb"

const ContentExpansion = () => {
 
  return (
    <>
      <BreadCrumb currentPage="Content Expansion" />
      <div className="lg:pb-32 lg:pt-6 md:pb-12 md:pt-4 sm:py-6">
        <GeneralForm btnText="Generate content" type="EXPANSION" label2="Which topic you wanna expand?" minLength={4}/>
      </div>
    </>
  )
}
export default ContentExpansion