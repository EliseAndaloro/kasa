import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.cover} alt={props.title} />
            <p>{props.title}</p>
        </div>
    );
}

export default Card