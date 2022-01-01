import React from "react";
import { withTranslation } from "react-i18next";


const LanguageSelector = (props) => {
   const onChangeLanguage = language =>{
        const { i18n } = props;
        i18n.changeLanguage(language);
        //changeLanguage(language);
    }
    return(
        <div className="container">
        <img src="https://img.icons8.com/emoji/48/000000/turkey-flag-emoji.png" onClick={() => onChangeLanguage('tr')}/>
        <img src="https://img.icons8.com/color/48/000000/usa-circular.png" onClick={() => onChangeLanguage('en')}/>
       

    </div>
    );



};

export default withTranslation()(LanguageSelector);