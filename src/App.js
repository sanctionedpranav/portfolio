import { Portfolio } from "./container/Portfolio.js";
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/home/Home.js";
import { About } from "./components/about/About.js";
import { Skills } from "./components/skills/Skills.js";
import { menuList } from "./utils/constant.js";
import { Services } from "./components/services/Services.js";
import { Qualification } from "./components/qualifications/Qualification.js";
import { Testimonials } from "./components/testimonial/Testimonials.js";
import { Contact } from "./components/contact/Contact.js";
import { ScrollUp } from "./components/scrollUp/ScrollUp.js";
import Layout from "./pages/Layout.js";


const App = () => {
    return (<div>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Portfolio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About title="About Me" subtitle="My introduction" desc="Frontend Developer, I create web pages using HTML, CSS, Bootstrap, JavaScript and the JavaScript framework ReactJS. I total have 2+ years of experience." />
                } />
                <Route path="/skills" element={<Skills title="Skills" subtitle="My technical level" />
                } />
                <Route path="/services" element={<Services title="Services" subtitle="What I Offer" />
                } />
                <Route path="/qualification" element={<Qualification title="Qualification" subtitle="My personal Journey" qualificationEdu="Education" qualificationExp="Experience" />
                } />
                <Route path="/testimonials" element={<Testimonials title="My Clients" subtitle="Testimonial" />
                } />
                <Route path="/contact" element={<Contact title="Get in touch" subtitle="Contact Me" contactMeTitle="Talk to me" writeAboutProject="Write me your project" />
                } />
            </Route>
        </Routes>
    </div>)
}

export default App;