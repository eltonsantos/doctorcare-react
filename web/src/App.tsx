import { Widget } from "./components/FeedbackButton/Widget";
import { About } from "./components/Website/About";
import { BackToTopButton } from "./components/Website/BackToTopButton";
import { Contact } from "./components/Website/Contact";
import { Footer } from "./components/Website/Footer";
import { Header } from "./components/Website/Header";
import { Home } from "./components/Website/Home";
import { Services } from "./components/Website/Services";

import { useContext } from "react";
import  navbarContext, { INavbarContext }  from "./context/navbarContext";

export function App() {
  
  const { isNavbarOpen } = useContext(navbarContext) as INavbarContext;

  return (
    <>
      <div className={isNavbarOpen ? "navbar-open" : ""}>
        <Header />
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
      <Widget />
    </>
  )  
}
