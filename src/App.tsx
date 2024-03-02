import Header from "./components/Header";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
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
  let heading = "Video Game Collector's Database";
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setVisibility(false)}>Sample Warning Alert</Alert>
      )}
      <Button onClick={handleRequest}>Trigger Alert</Button>
      <Header />{" "}
      <ListGroup items={items} heading={heading} onSelect={handleSelect} />
    </div>
  );
};
export default App;
