
import logements from "./logements.json";

//récupération du fichier json et création de tableau pour chaque logement
function getLogements() {
    return logements.map((logement) => {
        return {
            id: logement.id,
            title: logement.title,
            cover: logement.cover,
        };
    });
}

//filtre les logements par id
function getId(id) {
    return logements.find((logement) => logement.id === id);
}

export { getLogements, getId };