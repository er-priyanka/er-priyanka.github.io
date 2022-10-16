import {Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import {AboutMe} from "./AboutMe";
import {Skills} from "./Skills";
import {Projects} from "./Projects";
import {Contact} from "./Contact";
import { NotFound } from "./NotFound";


export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

        
        
        </Routes>
    )
}