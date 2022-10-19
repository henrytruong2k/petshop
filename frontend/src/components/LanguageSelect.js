import React from "react";
import i18next from "i18next";

const languageMap = {
  en: { label: "English" },
  vi: { label: "Việt Nam" },
};

const LanguageSelect = () => {
  return (
    <div>
      {Object.keys(languageMap)?.map((item) => (
        <button
          key={item}
          onClick={() => {
            console.log("hallo");
            i18next.changeLanguage(item);
          }}
        >
          {languageMap[item].label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;
