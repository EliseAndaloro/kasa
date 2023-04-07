import '../styles/Banner.css'
import imgBanner from "../assets/IMG_homepage_banner.png";

function Banner(props) {
    const title = props.title;
    return (
        <div className="Kasa-banner">
            <img src={imgBanner} alt='Kasa' className='homepage-banner' />
            <p>{title}</p>
        </div>
    )
}

export default Banner