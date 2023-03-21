import "./App.css";
import Filter from "./components/YoutubeFilter/Filter";
// import StatusBar from "./components/Percentage/StatusBar";
// import Timer from "./components/Timer/Timer";
// import TypeWriter from "./components/TypeWriter/TypeWriter";
// import LetterByLetter from "./components/LetterSearch/LetterByLetter";
// import Boxer from "./components/Boxer/Boxer";

function App() {
  return (
    <div className="App">
      {/* <Boxer /> */}
      {/* <LetterByLetter /> */}
      {/* <Timer duration={1 * 24 * 60 * 60 * 1000} /> */}
      {/* <TypeWriter /> */}
      {/* <StatusBar /> */}
      <Filter />
    </div>
  );
}

export default App;
