import BlueButton from "./BlueButton"
import "./Profile.css"

const ProfileCard = () => {
  return (
    <div className="profilecard">
      <div className="container">
        <div className="avatar_name">
        <img className="avatar" src="/Personal_Website_In_React/avatar.jpg"></img>
        <div className="separator"></div>
        <p className="name">AzusagawaS</p>
        </div>
        <div className="button"><BlueButton/></div>
      </div>
    </div>
  )
}

export default ProfileCard