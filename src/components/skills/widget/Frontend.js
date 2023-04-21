import "./Frontend.css"
import { devSkill } from "../../../utils/constant";

export const Frontend = (props) => {
    return (<div className="skills-content">
        <h3 className="skills-title">{props.cardTitle}</h3>
        <div className="skills-box">
            {
                devSkill?.map((skillGroup, index) => {
                    return (
                        <div key={index} className="skills-group">
                            {
                                skillGroup?.map((skillData) => {
                                    return (
                                        <div key={skillData?.title} className="skills-data">
                                            <div>
                                            <i className={`bx bxl-${skillData.icon}`}></i>
                                                <h3 className="skills-name">{skillData?.title}</h3>
                                                <span className="skills-level">{skillData?.level}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>)
}