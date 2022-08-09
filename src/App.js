//import logo from "./logo.svg";
import "./App.css";
import travelData from "./travelData.js";
import Travel from "./components/Travel";
import Header from "./components/Header";

function App() {
  //console.log(travelData);
  const travelElement = travelData.map((travel) => {
    return <Travel {...travel} />;
  });
  // console.log(travelElement);
  return (
    <div className="App">
      <Header />
      {travelElement}
    </div>
  );
}

export default App;
