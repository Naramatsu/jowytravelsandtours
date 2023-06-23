import React, { useContext } from "react";
import { AppContext } from "../../context";
import Grid from "kromac-ui-18/dist/Grid";
import classNames from "classnames";
import lan from "./AboutUs.data.json";
import "./AboutUs.style.scss";

const AboutUs = () => {
  const { theme, language: appLanguage } = useContext(AppContext);
  const language = lan[appLanguage];
  const aboutUsClass = classNames("panel__section aboutus", theme);

  return (
    <section className={aboutUsClass}>
      <h1>{language.title}</h1>
      <Grid columns={2}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg"
            alt="img_mision"
          />
        </div>
        <div>
          <h3>{language.mision}</h3>
          <p>{language.misionText}</p>
        </div>
        <div>
          <h3>{language.vision}</h3>
          <p>{language.visionText}</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg"
            alt="img_mision"
          />
        </div>
        <div>
          <img
            src="	https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg"
            alt="img_mision"
          />
        </div>
        <div>
          <h3>{language.aboutMe}</h3>
          <p>{language.aboutMeText}</p>
        </div>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};
export default AboutUs;
