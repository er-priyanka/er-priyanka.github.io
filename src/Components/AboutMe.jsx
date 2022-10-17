import { Box, Center, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import profile from "../Images/Priyanka_Shahane1.jpg";
import {TfiHandPointRight} from "react-icons/tfi";

export const AboutMe = ()=>{
    return (
     <section id="about">
  <Flex  gap={10} justifyContent="space-around" direction={{base:'column', md:"row"}}>
                    <Stack color="whiteAlpha.800" w={{base:"100%", md:"50%"}} textAlign="left">
                        <Text fontSize="2xl">Hi, I am</Text>
                        <Heading fontSize="5xl">Priyanka Shahane</Heading>
                        <Heading as="i" fontWeight="400" fontSize="2xl">Full Stack Web Developer</Heading>
                        <Text fontSize="1.1rem" color="whiteAlpha.700">
                        Innovative Full Stack Web Developer
                        capable of building interactive and
                        responsive websites using HTML, CSS,
                        JavaScript, React, NodeJS, ExpressJS, and
                        MongoDB.
                        </Text>

                        <Box>
                            <Heading fontSize="2xl" my={6}>
                            <Icon mr="3" as={TfiHandPointRight} />
                            Problem Solving</Heading>
                        </Box>
                    </Stack>
                    <Center>
                        <Image w="200px" 
                        // borderRadius="50%" 
                        alt="Avatar" src={profile} />
                    </Center>
      </Flex>
     </section>
    
    )
}