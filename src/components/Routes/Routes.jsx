import React from 'react';
import useFormatLocation from '../../hooks/useFormatLocation';
import AboutUs from '../AboutUs/AboutUs';
import SectionTemplate from '../SectionTemplate/SectionTemplate';

const Routes = (props) => {
  const { pathname } = useFormatLocation();

  if (pathname === 'info/aboutus') return <AboutUs />;

  return <SectionTemplate />;
};
export default Routes;
