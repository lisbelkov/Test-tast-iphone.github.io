// import { useState } from 'react';
// import { useTranslation } from "react-i18next";
// import "./App.css";
import "./i18n/config";
import Page from './Page/Page';
function App() {
  // const { t } = useTranslation();

  return (
    <>
      <div>
        {/* <p>{t("title.Welcome to React")}</p> */}
        <Page />
      </div>
    </>
  );
}

export default App;
