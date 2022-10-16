import { Flex, Link, Show, Spacer} from "@chakra-ui/react";
import { SideDrawer } from "./SideDrawer";

export const Navbar = ()=>{
 
    return (
        <Flex
         bgColor="blue.700" 
         py={5} px={{base:5, md:10}}
         position="sticky"
         top="0"
         zIndex={100}
         color="whiteAlpha.800"
         >
         <Show  above="md">
            <Flex fontWeight="bold" gap={5}>
                <Link href="/">Home</Link>
                <Link href="/about-me">About me</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/projects">Projects</Link>
            </Flex>
         </Show>
        
        <Show below="md">
            <SideDrawer />
        </Show>

        <Spacer />

          <Flex fontWeight="bold" gap={5}>
            <Link href="/contact">Contact</Link>
            <Link target="_blank" href="https://drive.google.com/file/d/1BrfFaqYC1AdFkT648qR7OeutZHXU7yY5/view?usp=sharing">Resume</Link>
          </Flex> 
            
        </Flex>
    )
}