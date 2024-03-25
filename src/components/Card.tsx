import '../css/Card.css';

interface CardData {
  image?: string;
  alt?: string;
  title
: string;
  description: string;
}

const Card = () => {
  return (
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">Card Title</h5>
    <p className="card-text">Some quick example text.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
};

export default Card;
