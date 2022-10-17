import { Box,  Container } from "@chakra-ui/react"
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";


export const Home = ()=>{
    return (
        <Box 
        minH="100vh"
        bgGradient='linear(to-t, blackAlpha.900, blue.900, blue.600, blue.900, blackAlpha.900)'       
        >
            <Navbar />
            <Container maxW="5xl" p="10">
            
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </Container>
                
        </Box>
    )
}