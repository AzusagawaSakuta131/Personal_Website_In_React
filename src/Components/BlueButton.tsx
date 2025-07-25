import "./BlueButton.css"

const BlueButton = () => {
  return (
    <a 
    className="bluebutton"
    href="mailto:azusagawasakuta131@gmail.com"
    >
            <img 
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
            alt="Gmail"
            width="32"
            height="32" 
            className="icon"
            />
            <span className="buttontext">Contact me via Gmail</span>
        </a>
  )
}

export default BlueButton