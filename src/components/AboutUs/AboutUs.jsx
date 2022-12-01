import React from 'react';
import Grid from 'kromac-ui-18/dist/Grid';
import './AboutUs.style.scss';

const AboutUs = () => {
  console.log('heree');
  return (
    <section className="panel-section">
      <h3>AboutUs Here!!</h3>
      <Grid columns={2}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg"
            alt="img_mision"
          />
        </div>
        <div>
          Espanol Hospedaje - Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged
        </div>
      </Grid>
    </section>
  );
};
export default AboutUs;
