import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeComponents from "../../Components/HomeComponents";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

function Homepage() {
  return (
    <>
      
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <Navbar />
        <HomeComponents />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default Homepage;
