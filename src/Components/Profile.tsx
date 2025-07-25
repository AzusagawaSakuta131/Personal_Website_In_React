import BlueButton from "./BlueButton"
import "./Profile.css"

const ProfileCard = () => {
  return (
    <div className="profilecard">
        <div><img src="/avatar.jpg"></img></div>
        <p className="name">AzusagawaS</p>
        <p className="gmail">azusagawasakuta131@gmail.com</p>

        <BlueButton/>
    </div>
  )
}

export default ProfileCard