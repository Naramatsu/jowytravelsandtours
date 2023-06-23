import React from "react";
import { AppContext } from "../../context";
import Grid from "kromac-ui-18/dist/Grid";
import GridItem from "kromac-ui-18/dist/GridItem";
import lan from "./Footer.data.json";
import "./Footer.style.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const iconBuilder = (label) => {
  switch (label) {
    case "Facebook":
      return <FaFacebookF />;
    case "Instagram":
      return <FaInstagram />;
    default:
      return <FaWhatsapp />;
  }
};

const Footer = () => {
  const { language: appLanguage } = useContext(AppContext);
  const language = lan[appLanguage];
  return (
    <footer className="footer">
      <Grid columns={3}>
        <GridItem csm={3} cmd={1}>
          <h5>{language.terms}</h5>
          <p>{language.showTerms}</p>
        </GridItem>
        <GridItem csm={3} cmd={1}>
          <h5>{language.media}</h5>
          <ul>
            {language.mediaList.map(({ name, link }, index) => (
              <li key={index}>
                {iconBuilder(name)}
                <a href={link} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </GridItem>
        <GridItem csm={3} cmd={1}>
          <h5>{language.mapSite}</h5>
          <ul>
            {language.pages.map(({ name, link }, index) => (
              <li key={index}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </GridItem>
      </Grid>
      <p className="copyright">{language.copyright}</p>
    </footer>
  );
};

export default Footer;
