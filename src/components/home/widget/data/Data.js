import "./Data.css"
import { Button } from "../../../commonComponent/index.js";

export const Data = ({ homeTitle, homeSubtitle, homeDesc, homeContactBtn }) => {
    
    return (<div className="home-data">
        <h1 className="home-title">{homeTitle}</h1>
        <h3 className="home-subtitle">{homeSubtitle}</h3>
        <p className="home-desc">{homeDesc}</p>
    <div>
        <Button icon="book-open" name={homeContactBtn}/>
    </div>

    </div>)
}