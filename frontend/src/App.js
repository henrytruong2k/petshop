import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./components/LanguageSelect";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSelect />
      <h1>{t("welcome")}</h1>
    </>
  );
};

export default App;
