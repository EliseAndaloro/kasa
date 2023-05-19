import { useParams } from "react-router-dom";
import { getId } from "../data/services";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import '../styles/Accomodation.css'
import Error from "./Error";
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from "../components/Collapse/Collapse";

function Accomodation() {
    const { logementId } = useParams();
    const logement = getId(logementId);

    if (logement === undefined) {
        return <Error />;
    }

    return (
        <div className="logement">
            <div className="carrousel">
                <Carrousel pictures={logement.pictures} />
            </div>
            <div className="logement-title">
                <div className="logement-title-text">
                    <h2>{ logement.title}</h2>
                    <p>{ logement.location }</p>
                </div>
            </div>
            <div className="logement-tags-rate-container">
                <div className="tags">
                    { logement.tags.map((tag) => (
                        <Tag name={tag} key={tag} />
                    )) }
                </div>
            </div>
            <div className="rating">
                <div className="stars">
                    <Rating rating={logement.rating} />
                </div>
                <div className="host">
                    <h3>{ logement.host.name }</h3>
                    <img src={ logement.host.picture } alt={ logement.host.picture } />
                </div>
            </div>
            <div className="collapse">
                <div className="description">
                    <Collapse title="Description" text={ logement.description }  />
                </div>
                <div className="equipement">
                    <Collapse title="Equipements" text={ logement.equipments }  />
                </div>
            </div>
        </div>
    );
}

export default Accomodation;