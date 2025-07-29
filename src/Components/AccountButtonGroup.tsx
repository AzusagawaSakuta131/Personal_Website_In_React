import { useState } from "react";
import AccountButton from "./AccountButton"
import './AccountButtonGroup.css'

const AccountButtonGroup=()=>{
    const [hoverText,setHoverText]=useState<string | null>(null);

    const platforms=[
        {
            iconUrl:"./GitHub.svg",
            link:"https://github.com/AzusagawaSakuta131",
            altText:"GitHub code repositories",
        },
        {
            iconUrl:"./X.svg",
            link:"https://x.com/SakutaAzusaW",
            altText:"Sharing bits of my life on Twitter",
        },
        {
            iconUrl:"./Fiverr.svg",
            link:"https://www.fiverr.com/users/azusagawasakuta/seller_dashboard",
            altText:"Feel free to purchase my service!",
        },
        {
            iconUrl:"./Linkedin.svg",
            link:"https://www.linkedin.com/in/sakuta-azusagawa-55b355372/",
            altText:"Professional account on Linkedin",
        },
        
    ]
    
    return (
    <div>
        <div className="buttonslayout">
            {platforms.map(({iconUrl,link,altText})=>(
                <AccountButton 
                key={link}
                iconUrl={iconUrl}
                link={link}
                altText={altText}
                onHover={setHoverText}
                />
            ))}
        </div>
        <div className="introduce">
            {hoverText || "introduce"}
        </div>
    </div>
    );
};

export default AccountButtonGroup;
