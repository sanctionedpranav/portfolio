import { Frontend } from "./widget/Frontend";



export const Skills = (props) => {
    return (<section className="skills section" id="skills">
        <h2 className="section-title">{props.title}</h2>
        <span className="section-subtitle">{props.subtitle}</span>

        <div className="skills-container container">
            <div>
                <Frontend cardTitle="Frontend Developer"/>
            </div>
        </div>
    </section>)
}