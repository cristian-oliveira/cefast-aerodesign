import React from "react";
import GlobalStyle from "./theme/global";
import Header from "./modules/header/header";
import Footer from "./modules/footer/footer";
import Home from "./modules/pages/home";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
