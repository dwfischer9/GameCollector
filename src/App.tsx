import Card from "./components/Card";
import "./App.css"
import Navbar from "./components/Navbar";
import React,{ useState, useEffect } from 'react';
const App: React.FC = () => {
  // const [alertVisible, setVisibility] = useState(false);
  // const handleRequest = async () => {
  //   try {
  //     const request = await axios.get("http://localhost:3001/data");
  //     console.log(request.data);
  //   } catch (error) {
  //     console.error("Error executingcode", error);
  //   }
  // };
  // interface CardData {
  //   image: string;
  //   alt: string;
  //   title: string;
  //   description: string;
  // }
  
  // const [dynamicData, setDynamicData] = useState<CardData[]>([]);
const [dynamicData, setDynamicData] = useState([]);
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await fetch('/data');
    const responseData = await response.text();
    console.log(responseData);
    const data = JSON.parse(responseData); // Parse the raw response data as JSON
    console.log(data);
    setDynamicData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      {dynamicData.map((item, index) => (
      <Card key={index} data={item} />))}

      {/* {alertVisible && ( */}
        {/* // <Alert onClose={() => setVisibility(false)}>Sample Warning Alert</Alert> */}
      {/* )} */}
   {/* <div className="container-no-gutters"> */}
        {/* <div className="row"> */}
          {/* <div className="col-12"> */}
            {/* <Button onClick={handleRequest}>Sample Query</Button>
            <Button onClick={() => setVisibility(true)}>Trigger Alert</Button> */}

          {/* </div> */}
          {/* <div className="col-sm-2"> */}
          
          {/* </div> */}
          {/* <div className="col-s"> */}
            

          {/* </div> */}
        {/* </div> */}

      {/* </div> */}
      {/* <div style={cardStyle}><Card><a href="#" className="btn btn-primary">Go somewhere</a></Card></div> */}

      {/* <Header />{" "} */}

    </>
  );
};
export default App;