import React from 'react';
import Grid from 'kromac-ui-18/dist/Grid';
import GridItem from 'kromac-ui-18/dist/GridItem';
import './Footer.style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid columns={3}>
        <GridItem csm={3} cmd={1}>
          <h5>Terminos y condiciones</h5>
          <p>Ver terminos y condiciones</p>
        </GridItem>
        <GridItem csm={3} cmd={1}>
          <h5>Redes Sociales</h5>
          <ul>
            <li>WhatsApp</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </GridItem>
        <GridItem csm={3} cmd={1}>
          <h5>Mapa del sitio</h5>
          <ul>
            <li>Inicio</li>
            <li>Hospedaje</li>
            <li>Pasadias</li>
            <li>Tours</li>
            <li>Transportes</li>
            <li>Embarcadiones</li>
            <li>Sobre Nosotros</li>
          </ul>
        </GridItem>
      </Grid>
      <p className="copyright">
        Todos los derechos reservados. Copyright © 2022. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
