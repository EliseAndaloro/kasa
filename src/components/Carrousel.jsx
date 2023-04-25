import droite from "../assets/icones/droite.png";
import gauche from "../assets/icones/gauche.png";
import { useState } from "react";

//let index = 0;

function Carrousel({ pictures }) {
    const [index, setNewIndexImg] = useState(0);
    //setNewImg, est la fonction que l'on appelle et qui modifie cette valeur
    //useState, représente la valeur de base, 0

    function btnsuivant() {
        console.log(index);
        setNewIndexImg(index + 1);
        console.log(index);
        if (index >= pictures.length) {
            setNewIndexImg(0);
        }
    }
    function btnprecedent() {
        setNewIndexImg(index - 1);
        if (index < 0) {
            setNewIndexImg(pictures.length - 1);
        }
    }

    function navigation() {
        return (
            <div className="navigation-photo">
                <img src={gauche} className="precedent" onClick={btnprecedent} alt="" />

                <img src={droite} className="suivant" onClick={btnsuivant} alt="" />
                <p>
                    {index + 1}/{pictures.length}
                </p>
            </div>
        );
    }
    return (
        <div
            className="photo"
            style={{ backgroundImage: `url("${pictures[index]}")` }}
        >
            {pictures.length > 1 ? navigation() : ""}
        </div>
    );
}

export default Carrousel;