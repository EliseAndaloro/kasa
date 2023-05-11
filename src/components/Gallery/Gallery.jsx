import Card from "../Card/Card";
import { getLogements} from "../../data/services";
import { Link } from "react-router-dom";
import './Gallery.css';

function Gallery() {
    return (
        <div className="Kasa-gallery">
            { getLogements().map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <Card
                        cover={logement.cover}
                        title={logement.title}
                        id={logement.id}
                    />
                </Link>
            )) }
        </div>
    )
}

export default Gallery