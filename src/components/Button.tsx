interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: 'primary'|'secondary'|'danger'|'success'|'close'; // color is optional, default to green. allow these options
}
const Button = ({ children, onClick, color = "success" }: ButtonProps) => {
  // { item, onClick }: ButtonProps
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
