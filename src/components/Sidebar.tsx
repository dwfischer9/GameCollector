import "../css/Sidebar.css"
import ListGroup from "./ListGroup";
interface SidebarProps {
    children?: String | JSX.Element | JSX.Element[];
}

const handleSelect = (item: string) => {
    console.log(item);
};
let items = [
    "PlayStation 1",
    "PlayStation 2",
    "PlayStation 3",
    "Nintendo Switch",
];

let heading = "Consoles";

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div id="sidebar">
            {children}
            <ListGroup items={items} heading={heading} onSelect={handleSelect} />
            <ListGroup items={items} heading={heading} onSelect={handleSelect} />
            <ListGroup items={items} heading={heading} onSelect={handleSelect} />
            <ListGroup items={items} heading={heading} onSelect={handleSelect} />
            <ListGroup items={items} heading={heading} onSelect={handleSelect} />
            
        </div>
    )
}
export default Sidebar;