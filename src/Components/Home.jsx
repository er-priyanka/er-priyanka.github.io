import { Box,  Container } from "@chakra-ui/react"
import { AboutMe } from "./AboutMe";
import { Projects1 } from "./Projects1";
import { Skills } from "./Skills";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { GithubTools } from "./GithubTools";


export const Home = ()=>{
    return (
        <section id="#" >
            <Box 
        minH="100vh"
        bgGradient='linear(to-t, blackAlpha.900, blue.900, blue.600, blue.900, blackAlpha.900)' 
        // scrollBehavior="smooth"      
        >
            <Navbar />
            <Container maxW="6xl" scrollBehavior="smooth">
            
                <AboutMe />
                <Skills />
                <Projects1 />
                <GithubTools />
            </Container>

            <Contact />   
        </Box>
        </section>
    )
}