import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-icon">📊</div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;