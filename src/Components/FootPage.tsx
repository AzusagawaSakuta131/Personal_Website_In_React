import ProfileCard from "./Profile"
import "./FootPage.css"
import { ButtonGroupCard } from "./ButtonGroupCard"


export const FootPage = () => {
  return (
    <div className="footpage">
      <div className="footpagecontainer">
      <ProfileCard/>
      <ButtonGroupCard/>
      </div>
    </div>
  )
}
