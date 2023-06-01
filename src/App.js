import "@fontsource/be-vietnam-pro";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Sections/Heading/Heading";
import Features from "./components/Sections/Features/Features";
import Reviews from "./components/Sections/Reviews/Reviews";
import CTA from "./components/Sections/CTA/CTA";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <Heading />
        <Features />
        <Reviews />
        <CTA />
      </main>
    </div>
  );
}

export default App;
