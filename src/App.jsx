import React, { useContext, useState } from "react";
import { AppContext } from "./context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FloatButton from "./components/FloatButton";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { getAllTabs } from "./utils/dataGrouper";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "kromac-ui-18/dist/Menu";
import CarShop from "./components/CarShop";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Routes from "./components/Routes";
import "./App.style.scss";

const App = () => {
  const [showModalCarShop, setShowModalCarShop] = useState(false);
  const { theme, language } = useContext(AppContext);
  const allTabs = getAllTabs(language);
  const bgColor = "#17202a";

  return (
    <main className={`main__content kromac-scroll ${theme}`}>
      <Router>
        <Header />
        <Menu
          tabs={allTabs}
          imgLogo="JTYT_logo.png"
          bgColor={bgColor}
          hamburgerColor={bgColor}
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route strict path="/:some">
          <Routes />
        </Route>
        <button
          className="btn__settings carshop"
          onClick={() => setShowModalCarShop(true)}
        >
          <FaShoppingCart />
        </button>
        {showModalCarShop && (
          <Modal onClose={() => setShowModalCarShop(false)}>
            <CarShop />
          </Modal>
        )}
        <FloatButton role="settings" Icon={() => <AiFillSetting />} />
        <Footer />
      </Router>
    </main>
  );
};

export default App;
