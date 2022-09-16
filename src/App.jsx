import React, { useContext } from 'react';
import { AppContext } from './context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ButtonSettings from './components/ButtonSettings';
import { getAllTabs } from './utils/dataGrouper';
import Header from './components/Header';
import Home from './components/Home';
import Menu from 'kromac-ui/dist/Menu';
import SectionTemplate from './components/SectionTemplate';

const App = () => {
  const { theme, language } = useContext(AppContext);
  const allTabs = getAllTabs(language);

  return (
    <main className={`main__content kromac-scroll ${theme}`}>
      <Router>
        <Header />
        <Menu
          tabs={allTabs}
          imgLogo="JTYT_logo.png"
          bgColor="#17202a"
          hamburgerColor="#17202a"
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route strict path="/:some">
          <SectionTemplate />
        </Route>
        <ButtonSettings />
      </Router>
    </main>
  );
};

export default App;
