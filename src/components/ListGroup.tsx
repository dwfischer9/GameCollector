import { useState } from "react";
interface ListGroupProps {
  items: string[];
    heading: string;
    onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMsg = () => {
    return items.length === 0 && <p> No item found </p>;
  };
  // items = [];
  return (
    <>
      <h1>{heading}</h1>
      {getMsg()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
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
    </>
  );
}
export default ListGroup;
