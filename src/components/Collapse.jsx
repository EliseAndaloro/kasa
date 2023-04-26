import React, { useState } from "react";
import close from "../assets/icones/fermer.png";
import open from "../assets/icones/ouvert.png";
import "../styles/Collapse.css";

function Collapse({ title, text, extraClass }) {
    const [CollapseStart, setCollapse] = useState(false);

    return CollapseStart ? (
        <div className={extraClass ? "Collapse " + extraClass : "Collapse"}>
            <div className="titre-Collapse">
                <h3>{title}</h3>
                <img
                    src={open}
                    alt="ouverture collapse"
                    onClick={() => setCollapse(false)}
                />
            </div>
            {typeof text === "object" ? tabEquipement(text) : <p>{text}</p>}
        </div>
    ) : (
        <div className="Collapse">
            <div className="titre-Collapse">
                <h3>{title}</h3>
                <img
                    src={close}
                    alt="fermeture collapse"
                    onClick={() => setCollapse(true)}
                />
            </div>
        </div>
    );
}

function tabEquipement(tab) {
    return (
        <ul>
            {tab.map((equipment) => (
                <li key={equipment}>{equipment}</li>
            ))}
        </ul>
    );
}

export default Collapse;