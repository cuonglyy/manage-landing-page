import "@fontsource/be-vietnam-pro";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Sections/Heading/Heading";
import Features from "./components/Sections/Features/Features"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <Heading />
        <Features />
      </main>
    </div>
  );
}

export default App;
