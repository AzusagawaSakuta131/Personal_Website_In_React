import { ButtonGroupCard } from "./ButtonGroupCard"
import "./Navigation.css"
import ProfileCard from "./Profile"
const Navigation = () => {
  return (
    <div className="navigation">
        <ProfileCard/>
        <ButtonGroupCard/>
    </div>
  )
}

export default Navigation