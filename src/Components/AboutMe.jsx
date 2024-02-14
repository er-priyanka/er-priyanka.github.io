import { Button, Center, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
// import profile from "../Images/Priyanka_Shahane1.jpg";
import profile from "../Images/profile_pic.jpg"
import {IoMdDownload} from "react-icons/io";
import {TfiHandPointRight} from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";
import styles from "./AboutMe.module.css";
import resume from "../resume/resume.pdf";

const softSkills = [
    {name:"Problem Solving", color:"red"},
    {name:"Team Collaboration", color:"green"},
    {name:"Leadership", color:"white"},
    {name:"Flexible", color:"orange"},
    {name:"Leadership", color:"blue"},
]

export const AboutMe = ()=>{
    const [skillIndex, setSkillIndex] = useState(0);
    const inputRef = useRef(null);

    const handleClick = () =>{
        window.open("https://drive.google.com/file/d/1vvo058BmSmgNfAEJqLoqgl0thkUtkNaW/view?usp=sharing");
    }

    useEffect(()=>{
        if(inputRef.current === null){
            inputRef.current = setInterval(() => {
                setSkillIndex(prev =>{
                    if(prev === softSkills.length-1){
                        return 0;
                    }else{
                        return prev + 1;
                    }
                })
            }, 3000);
        }
    }, [skillIndex])

    return (
    <section id="aboutMe">
        <Flex  p="10" py="20"  gap={10} justifyContent="space-around" direction={{base:'column-reverse', md:"row"}}>
                    <Stack 
                    color="whiteAlpha.800" 
                    w={{base:"100%", md:"50%"}} 
                    textAlign="left"
                    spacing={3}
                    >
                        <Text fontSize="2xl">Hi, I'm</Text>
                        <Heading fontSize="5xl">Priyanka Shahane</Heading>
                        <Heading as="i" fontWeight="400" fontSize="2xl">Full Stack Web Developer</Heading>
                        <Text fontSize="1.1rem" color="whiteAlpha.700">
                        capable of building interactive and
                        responsive websites using HTML, CSS,
                        JavaScript, React, NodeJS, ExpressJS, and
                        MongoDB.
                        </Text>

                        <HStack>
                            <Icon mr="3" as={TfiHandPointRight} />
                            <Heading fontSize="2xl" my={6}
                            overflow="hidden"
                            textOverflow="clip"
                            h="30px"
                            className={styles.skillTransition}
                            >
                            {softSkills[skillIndex].name}
                            </Heading>
                        </HStack>

                        <a href={resume} download="Priyanka_Shahane_Resume.pdf">
                            <Button 
                            bgColor="green.600" 
                            w="fit-content"
                            gap={2}
                            fontWeight="bold"
                            _hover={{
                                bgColor:"green.800"
                            }}

                            onClick={handleClick}
                             >
                            <Icon as={IoMdDownload} 
                            fontSize="xl"
                             /> Resume
                            </Button>
                        </a>
                    </Stack>
                    <Center>
                        <Image w="200px" 
                        // borderRadius="50%" 
                        border="5px solid black"
                        alt="Avatar" src={profile} />
                    </Center>
      </Flex>
    
      </section>
    )
}