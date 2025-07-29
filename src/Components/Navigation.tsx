import { ButtonGroupCard } from "./ButtonGroupCard"
import { Directions } from "./Directions"
import "./Navigation.css"
import ProfileCard from "./Profile"
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="profile"><ProfileCard/></div>
      <div className="directions"><Directions/></div>
      <div className="buttongroup"><ButtonGroupCard/></div>
    </div>
  )
}

export default Navigation