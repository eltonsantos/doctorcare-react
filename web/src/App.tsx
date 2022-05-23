import { Widget } from "./components/FeedbackButton/Widget";
import { About } from "./components/Website/About";
import { BackToTopButton } from "./components/Website/BackToTopButton";
import { Contact } from "./components/Website/Contact";
import { Footer } from "./components/Website/Footer";
import { Header } from "./components/Website/Header";
import { Home } from "./components/Website/Home";
import { Services } from "./components/Website/Services";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
      <BackToTopButton />
      <Widget />
    </>
  )  
}
