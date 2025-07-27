import "./AccountButton.css"
interface AccountButtonProps{
    iconUrl:string;
    link:string;
    altText:string;
}


const AccountButton = ({iconUrl,link,altText}:AccountButtonProps) => {
  return (
    <a  href={link}
    className="accountbutton"
    target="_blank" 
    rel="noopener noreferrer"
    >
        <img 
        src={iconUrl}
        alt={altText}
        width="32"
        height="32" 
        className="accountbuttonicon"
        />
    </a>
  )
}

export default AccountButton