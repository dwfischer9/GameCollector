// import Header from "./components/Header";
import Alert from "./components/Alert";
import Card from "./components/Card";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";
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

  const handleSelect = (item: string) => {
    console.log(item);
  };
  let items = [
    "PlayStation 1",
    "PlayStation 2",
    "PlayStation 3",
    "Nintendo Switch",
  ];
  let cardStyle = {width:'20%'};
  let style = {
    backgroundColor: '#272727'}
  let heading = "Video Game Collector's Database";
  return (
    
    <div style={style}><Header/>
      {alertVisible && (
        <Alert onClose={() => setVisibility(false)}>Sample Warning Alert</Alert>
        )}
        <ListGroup items={items} heading={heading} onSelect={handleSelect} />
      <div style={cardStyle}><Card><a href="#" className="btn btn-primary">Go somewhere</a></Card></div>
      <Button onClick={handleRequest}>Sample Query</Button>
      <Button onClick={()=>setVisibility(true)}>Trigger Alert</Button>
      
      {/* <Header />{" "} */}
    </div>
  );
};
export default App;