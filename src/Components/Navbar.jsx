import { Flex, Link, Show, Spacer} from "@chakra-ui/react";
import { SideDrawer } from "./SideDrawer";
import resume from "../resume/resume.pdf";

export const Navbar = ()=>{

  const handleClick = () =>{
    window.open("https://drive.google.com/file/d/1vvo058BmSmgNfAEJqLoqgl0thkUtkNaW/view?usp=sharing");
  }
 
    return (
        <Flex
         bgColor="blackAlpha.900" 
         py={5} px={{base:5, md:10}}
         position="sticky"
         top="0"
         zIndex={100}
         color="whiteAlpha.800"
         alignItems={"center"}
         fontSize="xl"
         >
         <Show above="md">
            <Flex fontWeight="bold" gap={5} alignItems="center">
                <Link 
                href="#" 
                _hover={{
                  textDecor:"none",
                  color:"blue.400" 
                }}
                fontFamily="-moz-initial"
                fontSize="3xl"
                color="blue.400"
               
                >
                Priyanka
                </Link>

                <Link 
                href="#aboutMe"
                ml="5"
                _hover={{
                  textDecor:"none",
                  color:"blue.400" 
                }}
                >About me</Link>

                <Link 
                href="#skills"
                _hover={{
                  textDecor:"none",
                  color:"blue.400" 
                }}
                >Skills</Link>
                
                <Link 
                href="#projects"
                _hover={{
                      textDecor:"none",
                      color:"blue.400" 
                }}
                >Projects</Link>
            </Flex>

            <Spacer />

            <Flex fontWeight="bold" gap={5}>
            <Link 
            href="#contact"
            _hover={{
                  textDecor:"none",
                  color:"blue.400" 
            }}
            >Contact</Link>
            <Link   
            target="_blank" 
            _hover={{
                  textDecor:"none",
                  color:"blue.400" 
            }}
            href = {resume}
            // href="https://drive.google.com/file/d/1vvo058BmSmgNfAEJqLoqgl0thkUtkNaW/view?usp=sharing"  
            download="Priyanka_Shahane_Resume.pdf"
            onClick={handleClick}
            >
              Resume
            </Link>
            </Flex> 

         </Show>
        
        <Show below="md">
            <SideDrawer />
        </Show>

        

         
            
        </Flex>
        
    )
}