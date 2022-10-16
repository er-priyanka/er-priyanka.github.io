import { Box, Center, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import profile from "../Images/Priyanka_Shahane1.jpg";

export const Home = ()=>{
    return (
        <Box 
        // border="1px" 
        // borderColor="red" 
        minH="100vh"
        // bgGradient='linear(to-b, gray.200, gray.100)'
        bgGradient='linear(to-b, blackAlpha.300, blackAlpha.50)'
        p="10"
       
        >
            <Container
                maxW="5xl"
                
            >

                <Flex gap={10} justifyContent="space-around" direction={{base:'column', md:"row"}}>
                    <Stack w={{base:"100%", md:"50%"}} textAlign="justify">
                        <Text>Hi, I am</Text>
                        <Heading>Priyanka Shahane</Heading>
                        <Text >
                        Innovative Full Stack Web Developer
                        capable of building interactive and
                        functional websites using HTML, CSS,
                        JavaScript, NodeJS, ExpressJS, and
                        MongoDB. A person who is eager to learn
                        new technologies and wants to succeed in
                        an environment with excellent growth
                        which helps to achieve personal as well as
                        organizational goals.
                        </Text>

                        <Box>
                            <Heading fontSize="xl">Problem Solving</Heading>
                        </Box>
                    </Stack>
                    <Center>
                        <Image boxSize={60} borderRadius="50%" alt="Avatar" src={profile} />
                    </Center>
                </Flex>
            </Container>
                
        </Box>
    )
}