import { useTranslation } from "react-i18next";
import "./Page.css";
import "../i18n/config";
import Battery from "../assets/image/Battery.png";
import Wifi from "../assets/image/Wifi.png";
import Bluetooth from "../assets/image/Bluetooth.png";
import MobileSignal from "../assets/image/MobileSignal.png";
import Cross from "../assets/image/Cross.png";
import f1 from "../assets/image/f1.png";
import f2 from "../assets/image/f2.png";
import f3 from "../assets/image/f3.png";
import { useState } from "react";

function Page() {
  const { t } = useTranslation();
  const [data] = useState([
    { img: f1, text: "Unlimited Art Creati" },
    { img: f2, text: "Exclusive Styles" },
    { img: f3, text: "Magic Avatars With 20% off" },
  ]);

  return (
    <div className="allContent">
      {/* {t("title.Welcome to React")} */}
      <div className="allContentContainer">
        <div className="header">
          <div className="timeContainer">
            <p className="time"> 9:41</p>
          </div>
          <div className="headerIcon">
            <img src={MobileSignal} alt="MobileSignal" />
            <img src={Wifi} alt="Wifi" />
            <img src={Battery} alt="Battery" />
          </div>
        </div>
        <div className="headerIphoneEight">
          <div className="headerIcon">
            <img src={MobileSignal} alt="MobileSignal" />
            <p className="time">Carrier</p>
            <img src={Wifi} alt="Wifi" />
          </div>
          <div className="timeContainer">
            <p className="time"> 9:41 AM</p>
          </div>
          <div className="headerIcon">
            <img src={Bluetooth} alt="Bluetooth" />
            <p className="time"> 100%</p>
            <img src={Battery} alt="Battery" />
          </div>
        </div>
        <div>
          <button className="buttonCross">
            <img src={Cross} alt="Cross" />
          </button>
        </div>
        <div className="textContentContainer">
          <p className="textContent"> {t("title.Get Unlimited <br>Access")}</p>
        </div>
        <div className="styleCards">
          {data.map((item, i) => {
            return (
              <div key={i} className="cards">
                <img src={item.img} alt="" className="imgCards" />
                <p className="textCards">{item.text} </p>
              </div>
            );
          })}
        </div>
        <div className="groupButton">
          <button className="styleBestOffer">{t("title.BEST OFFER")}</button>
          <div className="styleTwoButtons">
            <div className="buttonTitleContent">
              <p className="styleTwoButtonsTitle">{t("title.YEARLY ACCESS")}</p>
              <p className="styleTwoButtonsContent">
                {t("title.Just {{price}} per year")}
              </p>
            </div>
            <div className="buttonTitleContent">
              <p className="styleTwoButtonsPrise">$0.48</p>
              <p className="styleTwoButtonsPrise">
                {t("title.{{price}} <br>per week")}
              </p>
            </div>
          </div>
          <div className="styleTwoButtons">
            <div className="buttonTitleContent">
              <p className="styleTwoButtonsTitle">{t("title.WEEKLY ACCESS")}</p>
            </div>
            <div className="buttonTitleContent">
              <p className="styleTwoButtonsPrise">$6.99 </p>
              <p className="styleTwoButtonsPrise">
                {" "}
                {t("title.{{price}} <br>per week")}
              </p>
            </div>
          </div>
          <a href="https://apple.com/ ">
            <button className="styleButtonContinue">
              {t("title.Continue")}
            </button>
          </a>
        </div>
        <footer className="styleFooter">
          <a className="styleLinkFooter" rel="stylesheet" href="#">
            {t("title.Terms of Use")}
          </a>
          <a className="styleLinkFooter" rel="stylesheet" href="#">
            {t("title.Privacy Policy")}
          </a>
          <a className="styleLinkFooter" rel="stylesheet" href="#">
            {t("title.Restore")}
          </a>
        </footer>
      </div>
    </div>
  );
}
export default Page;
