import React from "react";
import PrivacyandTermsView from "./PrivacyandTermsView";

const PrivacyandTerms =({title,subtitle,})=>{
    return(
        <PrivacyandTermsView heading={title} subheading={subtitle}/>
    )
}

export default PrivacyandTerms;