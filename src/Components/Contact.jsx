import { Box,  Flex, Grid, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react"
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {MdEmail, MdPhone} from "react-icons/md";



export const Contact = ()=>{
    return (
       <section id="contact">
         <Box
        p="10" 
       color="whiteAlpha.700"
      
        >

        <Heading mb="50px">Contact</Heading>
        <Grid
            templateColumns={{base: "repeat(1, 1fr)", md:"repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap="20px"
        >   
        <Stack alignItems="center"> 
                        <Icon color="red.300"  fontSize="3xl" as={MdEmail} />
                        <Heading  fontSize="xl">Email</Heading>
                        <Text
                        _hover={{
                            textDecoration:"underline",
                            color:"blue.400"
                        }}
                        >shahanepriyankas01@gmail.com</Text>
                    </Stack>

                    <Stack  alignItems="center">
                        <Icon color="green" fontSize="3xl" as={MdPhone} />
                        <Heading  fontSize="xl">Phone</Heading>
                        <Text
                        _hover={{
                            textDecoration:"underline",
                            color:"blue.400"
                        }}
                        >
                        +91 8793932131
                        </Text>
                        
                    </Stack>

                    <Stack  alignItems="center">
                        <Icon fontSize="3xl" as={FaGithub} />
                        <Heading  fontSize="xl">GitHub</Heading>
                        <Link 
                        target="_blank" 
                        _hover={{
                            textDecoration:"underline",
                            color:"blue.400"
                        }}
                        href="https://github.com/er-priyanka">
                        er_priyanka
                        </Link>
                        
                    </Stack>

                    <Stack  alignItems="center">
                        <Icon color="blue.400" fontSize="3xl" as={FaLinkedinIn} />
                        <Heading  fontSize="xl">LinkedIn</Heading>
                        <Link 
                        target="_blank"
                        _hover={{
                            textDecoration:"underline",
                            color:"blue.400"
                        }}
                        href="https://www.linkedin.com/in/priyanka-shahane-758246239/"
                        >
                        Priyanka Shahane
                        </Link>
                        
                    </Stack>
        </Grid>
 
        <Flex pt="10" gap={20} direction={{base:"column", mid:"row"}}>  
            <Text fontSize="0.9rem">@ Created by Priyanka Shahane</Text>   
        </Flex>
        
        </Box>
       </section>
    )
}