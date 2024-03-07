import Alert from "./components/Alert";
import Card from "./components/Card";
import "./App.css"
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
const App = () => {
  const [alertVisible, setVisibility] = useState(false);
  const handleRequest = async () => {
    try {
      const request = await axios.post("http://localhost:3001/execute-code");
      console.log(request.data);
    } catch (error) {
      console.error("Error executingcode", error);
    }
  };


  let cardStyle = { width: '20%' };
  let style = {
    backgroundColor: '#272727'
  }
  return (
    <>
    <div >
      <Navbar />
      {alertVisible && (
        <Alert onClose={() => setVisibility(false)}>Sample Warning Alert</Alert>
      )}
      <Sidebar/>
      </div>
      <div>
      <div style={cardStyle}><Card><a href="#" className="btn btn-primary">Go somewhere</a></Card></div>
      <Button onClick={handleRequest}>Sample Query</Button>
      <Button onClick={() => setVisibility(true)}>Trigger Alert</Button>

      {/* <Header />{" "} */}
      </div>
    </>
  );
};
export default App;