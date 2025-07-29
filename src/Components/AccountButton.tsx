import "./AccountButton.css"
interface AccountButtonProps{
    iconUrl:string;
    link:string;
    altText:string;
    onHover:(text:string|null)=>void;
}


const AccountButton = ({iconUrl,link,altText,onHover}:AccountButtonProps) => {
  return (
    <a  href={link}
    className="accountbutton"
    target="_blank" 
    rel="noopener noreferrer"
    onMouseEnter={() => onHover(altText)}
    >
        <img 
        src={iconUrl}
        alt={altText}
        className="accountbuttonicon"
        />
    </a>
  )
}

export default AccountButton