import AccountButton from "./AccountButton"
import './AccountButtonGroup.css'

const AccountButtonGroup=()=>{
    const platforms=[
        {
            iconUrl:"./GitHub.svg",
            link:"https://github.com/AzusagawaSakuta131",
            altText:"GitHub",
        },
        {
            iconUrl:"./X.svg",
            link:"https://x.com/SakutaAzusaW",
            altText:"Twitter",
        },
        {
            iconUrl:"./Fiverr.svg",
            link:"https://www.fiverr.com/users/azusagawasakuta/seller_dashboard",
            altText:"Fiverr",
        },
        {
            iconUrl:"./Telegram.svg",
            link:"https://t.me/AzusagawaSakuta131",
            altText:"Telegram",
        },
    ]
    
    return (
    <div className="buttonslayout">
        {platforms.map(({iconUrl,link,altText})=>(
            <AccountButton 
            key={link}
            iconUrl={iconUrl}
            link={link}
            altText={altText}
            />
        ))}
   
    </div>
    );
};

export default AccountButtonGroup;
