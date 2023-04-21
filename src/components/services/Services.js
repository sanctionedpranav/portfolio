import { ServicesCard } from "../services/widget/ServicesCard.js";
import "./Services.css"

export const Services = ({title, subtitle}) => {
    return (<div>
        <section className="services section" id="services">
            <h2 className="section-title">{title}</h2>
            <span className="section-subtitle">{subtitle}</span>

            <div className="services-container container">
                <ServicesCard modalTitle={title}/>
            </div>

        </section>
    </div>)
}