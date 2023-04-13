import emptystar from "../assets/emptystar.svg"
import fullstar from "../assets/fullstar.svg";

function Rating(props) {
    const getRate = (rate) => {
        const maxRate = 5;
        const arrayRate = [];
        for (let i = 0; i < maxRate; i++) {
            const element = i < rate ? <img key={i} src={ fullstar } alt="étoile pleine" /> : <img key={i} src={ emptystar } alt="étoile vide" />;
            arrayRate.push(element)
        }
        return arrayRate
    }
    return(
        getRate(props.rating).map((el)=>el)
    )
}

export default Rating