interface CardProps{
    children?:String|JSX.Element|JSX.Element[];
}
const Card = ({children}:CardProps) =>{
    return (<>
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    {children}
  </div>
</div>
    </>);
};
export default Card;