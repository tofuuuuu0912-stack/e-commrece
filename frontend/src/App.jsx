import React from "react";
import Header from "./component/Header";
import Top from "./component/Top";
import Card from "./component/Card";
import Catagoery2 from "./component/Catagoery2";
import Transportation from "./component/Transportation";
import Dupplicate from "./component/Dupplicate";
import Product from "./component/Product";
import Again from "./component/Again";
import News from "./component/News";
import Logo from "./component/Logo";
import Intro from "./component/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./component/pages/NotFound";

import { FcAbout } from "react-icons/fc";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div className=" px-6 sm:px-18">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Top />
                  <Card />
                  <Catagoery2 />
                  <Transportation />
                  <Dupplicate />
                  <Product />
                  <Again />
                  <News />
                  <Logo />
                </>
              }
            />

            <Route path="/shop" element={<Product />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/blogs" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<News />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>

        <Intro />
      </BrowserRouter>
    </div>
  );
};

export default App;
