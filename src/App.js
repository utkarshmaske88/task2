import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/sidebar";
import Hero from "./component/hero";
import Leftbar from "./component/leftbar";
function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Hero />
        <Leftbar />
      </div>
    </>
  );
}

export default App;
