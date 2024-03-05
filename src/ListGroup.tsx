import { useState } from "react";
interface ListGroupProps {
  items: string[];
    heading: string;
    onSelect: (item: string) => void;
}
const sty = {
color: "#FFFFFF",
backgroundColor: '#272727',
border : '1px solid #272727'
};
function ListGroup({ items, heading, onSelect }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMsg = () => {
    return items.length === 0 && <p> No item found </p>;
  };
  // items = [];
  return (
    <><div style={sty}>

      <h1>{heading}</h1>
      {getMsg()}
      <ul  style={sty} className="list-group" >
        {items.map((item, index) => (
          <li  style={sty}
          className={
            selectedIndex === index
            ? "list-group-item active"
            : "list-group-item"
          }
          key={item}
          onClick={() =>{
            setSelectedIndex(index);
            onSelect(item);}
          }
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
export default ListGroup;
