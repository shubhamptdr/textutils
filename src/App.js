import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export function App() {
  return (
    <>
      <Navbar title="TextUlits" aboutText="About" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

// export default App;
