import { experienceList } from "../../../utils/constant.js";

export const Experience = ({ expTimelineRound, expTimelineLine }) => {
    return (
        <>
            {
                experienceList.map((element, index) => {
                    return (
                        <div key={element.expId} className="qualification-data">
                            {
                                (index + 1) % 2 === 0 && <><div></div><div>
                                    <span className={`qualification-${expTimelineRound}`}></span>
                                    <span className={`qualification-${expTimelineLine}`}></span>
                                </div>
                                </>
                            }

                            <div className="qualification-timeline">
                                <h3 className="qualification-title">{element.experienceTitle}</h3>
                                <span className="qualification-subtitle">{element.experienceSubtitle}</span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i>{element.experienceTimePeriod}
                                </div>
                            </div>

                            {
                                (index + 1) % 2 !== 0 && <><div>
                                    <span className={`qualification-${expTimelineRound}`}></span>
                                    <span className={`qualification-${expTimelineLine}`}></span>
                                </div>
                                    <div></div></>
                            }

                        </div>
                    )
                })
            }
        </>
    )
}