interface ButtonProps {
  item: string;
  onClick: (item: string) => void;
}
function Button(
    // { item, onClick }: ButtonProps
) {
    return (
      <>
        <button type="button" className="btn">
          Base class
        </button>
      </>
    );
}
export default Button;