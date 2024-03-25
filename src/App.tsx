import Card from "./components/Card";
import "./App.css"
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from 'react';
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
const App: React.FC = () => {
  const [alertVisible, setVisibility] = useState(false);
  // const handleButtonClick = async () => {
  //   try {
  //     const response = await fetch('/data'); // Assuming the server is running on the same host
  //     console.log(response.json());
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // };
return (
    <><Navbar/>{alertVisible && (
      <Alert onClose={() => setVisibility(false)}>Sample Warning Alert</Alert>)}
      <div className="container-no-gutters">
        <div className="row">
          <div className="col-12">
            {/* <Button onClick={handleButtonClick}>Sample Query</Button> */}
            <Button onClick={() => setVisibility(true)}>Trigger Alert</Button>
          </div>
          <div className="col-sm-3" id="sidebarCont">
            <ListGroup/>
            
          </div>
          <div className="col-sm">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div></>
  );
};
export default App;