import { useParams } from "react-router-dom";
import { getId } from "../data/services";
import Tag from "../components/Tag";

function Accomodation() {
    const { logementId } = useParams();
    const logement = getId(logementId);

    return (
        <div className="logement">
            <h2>{ logement.title}</h2>
            <p>{ logement.location }</p>
            <div className="tags">
                { logement.tags.map((tag) => (
                    <Tag name={tag} key={tag} />
                )) }
            </div>
            <div className="host">
                <h3>{ logement.host.name }</h3>
                <img src={ logement.host.picture }
                     alt={ logement.host.picture }
                />
            </div>
        </div>
    );
}

export default Accomodation;