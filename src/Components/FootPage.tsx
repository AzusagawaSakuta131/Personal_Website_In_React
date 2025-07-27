import ProfileCard from "./Profile"
import { ButtonGroupCard } from "./ButtonGroupCard"
import "./FootPage.css"


export const FootPage = () => {
  return (
    <div className="footpage">
      <div className="footpagecontainer">
      <div><ProfileCard/></div>
      <div><ButtonGroupCard/></div>
      </div>
    </div>
  )
}
