import droite from "../../assets/icones/droite.png";
import gauche from "../../assets/icones/gauche.png";
import { useState } from "react";
import './Carrousel.css'

//let index = 0;

function Carrousel({ pictures }) {
    const [index, setNewIndexImg] = useState(0);
    //setNewImg, est la fonction que l'on appelle et qui modifie cette valeur
    //useState, représente la valeur de base, 0

    function btnsuivant() {
        setNewIndexImg(index + 1);
        if (index >= pictures.length - 1) {
            setNewIndexImg(0);
        }
    }
    function btnprecedent() {
        setNewIndexImg(index - 1);
        if (index <= 0) {
            setNewIndexImg(pictures.length - 1);
        }
    }

    function navigation() {
        return (
            <div className="carrousel-container">
                <img src={gauche} className="precedent" onClick={btnprecedent} alt="" />

                <img src={droite} className="suivant" onClick={btnsuivant} alt="" />

            </div>
        );
    }
    return (
        <div
            className="carrousel-content"
            style={{ backgroundImage: `url("${pictures[index]}")` }}
        >
            {pictures.length > 1 ? navigation() : ""}
        </div>
    );
}

export default Carrousel;