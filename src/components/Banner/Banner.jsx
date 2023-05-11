import './Banner.css'

function Banner(props) {
    const title = props.title;
    const imgSrc = props.imgSrc;
    return (
        <div className="Kasa-banner">
            <img src={imgSrc} alt='Kasa' className='homepage-banner' />
            <p>{title}</p>
        </div>
    )
}

export default Banner