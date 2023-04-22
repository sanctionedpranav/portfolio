import { Portfolio } from "./container/Portfolio.js";
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { About } from "./components/about/About.js";
import { Skills } from "./components/skills/Skills.js";
import Layout from "./pages/Layout.js";


const App = () => {
    return (<div>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Portfolio />} />
                <Route path="/skills" element={<Skills title="Skills" subtitle="My technical level" />} />
            </Route>
        </Routes>
    </div>)
}

export default App;