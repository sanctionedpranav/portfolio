export const Info = ({infoCardIcon, aboutTitle, aboutSubtitle}) => {

    return (
    <div className="about-info">
        <div className="about-box">
            <i className={`bx bx-${infoCardIcon}`}></i>
            <h3 className="about-title">{aboutTitle}</h3>
            <span className="about-subtitle">{aboutSubtitle}</span>
        </div>
    </div>
    )
}