import React, { useContext } from 'react';
import Grid from 'kromac-ui-18/dist/Grid';
import './AboutUs.style.scss';
import { AppContext } from '../../context';

const AboutUs = () => {
  const { theme } = useContext(AppContext);
  return (
    <section className={`panel-section aboutus ${theme}`}>
      <h1>Sobre Nosotros</h1>
      <Grid columns={2}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg"
            alt="img_mision"
          />
        </div>
        <div>
          <h3>Mision</h3>
          <p>
            Espanol Hospedaje - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged
          </p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>
            Espanol Hospedaje - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged
          </p>
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
          <h3>Sobre mi</h3>
          <p>
            Espanol Hospedaje - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged
          </p>
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
