import Header from "./components/Header";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
function App() {
  let items = [
    "PlayStation 1",
    "PlayStation 2",
    "PlayStation 3",
    "Nintendo Switch",
  ];

  const handleSelect = (item: string) => {
    console.log(item);
  };
  let heading = "Video Game Collector's Database";
  return (
    <div>
      <Alert>
       Sample Warning Alert
      </Alert>
      <Button></Button>
      <Header />{" "}
      
      <ListGroup items={items} heading={heading} onSelect={handleSelect} />
    </div>
  );
}
export default App;
