import { Box, Grid, GridItem, Heading, Icon,  Text } from "@chakra-ui/react";
import { AiFillHtml5, AiFillGithub, AiFillCodeSandboxSquare } from 'react-icons/ai';
import {DiCss3, DiJavascript, DiReact, DiMongodb, DiNodejsSmall, DiGit} from 'react-icons/di'
import {SiExpress, SiReplit, SiNetlify, SiVisualstudiocode} from "react-icons/si";

const skills = [
    {name:"HTML", icon_name:AiFillHtml5, color:"red.600"},
    {name:"CSS", icon_name:DiCss3, color:"blue.500"},
    {name:"JavaScript", icon_name:DiJavascript, color:"orange.500"},
    {name:"ReactJS", icon_name:DiReact, color:"blue.500"},
    {name:"MongoDB", icon_name:DiMongodb, color:"green"},
    {name:"Express", icon_name:SiExpress, color:"black"},
    {name:"NodeJS", icon_name:DiNodejsSmall, color:"green.500"},
   
]

const tools = [
    {name:"Vs Code", icon_name:SiVisualstudiocode, color:"#2C7BB4"},
    {name:"Replit", icon_name:SiReplit, color:"gray.600"},
    {name:"Codesandbox", icon_name:AiFillCodeSandboxSquare, color:"black"},
    {name:"Netlify", icon_name:SiNetlify, color:"blue.500"},
    {name:"Github", icon_name:AiFillGithub, color:"black"},
    {name:"Git", icon_name:DiGit, color:"orange.500"},
  
]
export const Skills = ()=>{
    return (
        <section id="skills">
            <Box
            
            p="10"
            // scrollBehavior="smooth" 
            >
                
                <Box>
                    <Heading color= "white" my="10">Skills</Heading>
                    <Grid 
                    margin="auto"
                    templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(4, 1fr)" }}
                    columnGap={{base:"20%", md:"10%", lg:"10%"}}
                    rowGap="40px"
                    >
                    
                    
                    {
                        skills.map((item, i) => (
                            <GridItem  
                            cursor="pointer" 
                            py={4} key={i} 
                            bgColor="whiteAlpha.800"
                            borderRadius="20px"
                            >
                                <Icon color={item.color} h="70px" w="70px" as={item.icon_name} />
                                <Text fontWeight="bold">{item.name}</Text>
                            </GridItem>
                        ))
                    }

                    </Grid> 

                    <Heading color= "white" mb="10" mt="70px" >Tools</Heading>
                    <Grid 
                    margin="auto"
                    mt={"40px"}
                    templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(4, 1fr)" }}
                    columnGap={{base:"20%", md:"10%", lg:"10%"}}
                    rowGap="40px"
                    >
                    
                    
                    {
                        tools.map((item, i) => (
                            <GridItem  
                            cursor="pointer" 
                            p={4} key={i} 
                            bgColor="whiteAlpha.800"
                            borderRadius="20px"
                            >
                            
                                <Icon color={item.color} h="60px" w="60px" as={item.icon_name} />
                                <Text fontWeight="bold">{item.name}</Text>
                               
                            </GridItem>
                        ))
                    }

                    </Grid> 
                </Box>
               

            </Box>
        </section>
    )
}