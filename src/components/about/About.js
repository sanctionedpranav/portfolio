import "./About.css";
import AboutImg from "../../assets/about.jpg"
import { Info } from "../about/widget/Info.js";
import CV from "../../../src/assets/8th sem.pdf";
import { Button } from "../../components/commonComponent/index.js";
import { iconList } from "../../utils/constant.js";


export const About = ({ title, subtitle, desc, }) => {
    const downloadFile = () => {
        // Replace the file URL with your own file URL
        const fileUrl = CV;

        // Create a new anchor element
        const link = document.createElement('a');
        link.href = fileUrl;

        // Set the download attribute to the file name
        link.setAttribute('download', 'Pranav-Resume.pdf');

        // Simulate a click on the anchor element to start the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <section className="about section" id="about">
            <h2 className="section-title">{title}</h2>
            <span className="section-subtitle">{subtitle}</span>

            <div className="about-container container grid">
                <img src={AboutImg} alt="" className="about-img" />

                <div className="about-data">
                    <div className="info-cards">
                        {iconList?.map((element) => {
                            return (
                                <Info key={element.title} infoCardIcon={element.icons} aboutTitle={element.title} aboutSubtitle={element.subtitle} />
                            )
                        })}

                    </div>

                    <p className="about-desc">{desc}</p>

                    <div onClick={downloadFile}>
                        <Button icon="download" name="Download Resume" />
                    </div>
                </div>
            </div>
        </section>
    )
};
