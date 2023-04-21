import { Header } from "../components/headers/Header.js";
import { Home } from "../components/home/Home.js";
import { About } from "../components/about/About.js";
import { Skills } from "../components/skills/Skills.js";
import { menuList } from "../utils/constant.js";
import { Services } from "../components/services/Services.js";
import { Qualification } from "../components/qualifications/Qualification.js";
import { Testimonials } from "../components/testimonial/Testimonials.js";
import { Contact } from "../components/contact/Contact.js";
import { Footer } from "../components/footer/Footer.js";
import { ScrollUp } from "../components/scrollUp/ScrollUp.js";

export const Portfolio = () => {
    // const list = ["Home", "About", "Skills", "Services", "Portfolio", "Contact"]

    return (<>
        <Header companyName="Portfolio" menuList={menuList} />

        <div className="main-section">
            <Home />
            <About title="About Me" subtitle="My introduction" desc="Frontend Developer, I create web pages using HTML, CSS, Bootstrap, JavaScript and the JavaScript framework ReactJS. I total have 2+ years of experience." />
            <Skills title="Skills" subtitle="My technical level" />
            <Services title="Services" subtitle="What I Offer" />
            <Qualification title="Qualification" subtitle="My personal Journey" qualificationEdu="Education" qualificationExp="Experience" />
            {/* <Testimonials title="My Clients" subtitle="Testimonial" /> */}
            <Contact title="Get in touch" subtitle="Contact Me" contactMeTitle="Talk to me" writeAboutProject="Write me your project" />
        </div>
        <Footer title="Pranav Portfolio" footerCopyRight="Pranav. All rights reserved" />
        <ScrollUp />
    </>)
}