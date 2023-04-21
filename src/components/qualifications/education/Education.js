import { educationList } from "../../../utils/constant.js";

export const Education = ({ eduTimelineRound, eduTimelineLine }) => {
    return (
        <>
            {
                educationList.map((element, index) => {
                    return (
                        <div key={element.educationTitle} className="qualification-data">
                            {
                                (index + 1) % 2 === 0 && <><div></div><div>
                                    <span className={`qualification-${eduTimelineRound}`}></span>
                                    <span className={`qualification-${eduTimelineLine}`}></span>
                                </div>
                                </>
                            }

                            <div  className="qualification-timeline">
                                <h3 className="qualification-title">{element.educationTitle}</h3>
                                <span className="qualification-subtitle">{element.educationSubtitle}</span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i>{element.educationTimePeriod}
                                </div>
                            </div>

                            {
                                (index + 1) % 2 !== 0 && <><div>
                                    <span className={`qualification-${eduTimelineRound}`}></span>
                                    <span className={`qualification-${eduTimelineLine}`}></span>
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