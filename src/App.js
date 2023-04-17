import "@fontsource/be-vietnam-pro";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Sections/Heading/Heading";
import Features from "./components/Sections/Features/Features"
import Reviews from "./components/Sections/Reviews/Reviews"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <Heading />
        <Features />
        <Reviews />
      </main>
    </div>
  );
}

export default App;
