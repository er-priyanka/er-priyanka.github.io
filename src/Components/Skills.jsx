import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { AiFillHtml5 } from 'react-icons/ai';
import {DiCss3, DiJavascript, DiReact, DiMongodb, DiNodejsSmall} from 'react-icons/di'
import {SiExpress} from "react-icons/si";

export const Skills = ()=>{
    return (
        <Box
        minH="100vh"
        // bgGradient='linear(to-b, gray.200, gray.100)'
        bgGradient='linear(to-b, blackAlpha.300, blackAlpha.50)'
        p="10"
       
        >
          <Stack direction={{base:"column", md:"row"}}>
            <Box>
                <Icon as={AiFillHtml5} />
                <Text>HTML</Text>
            </Box>
            
            <Box>
                <Icon as={DiCss3} />
                <Text>CSS</Text>
            </Box>

            <Box>
                <Icon as={DiJavascript} />
                <Text>JavaScript</Text>
            </Box>

            <Box>
                <Icon as={DiReact} />
                <Text>ReactJS</Text>
            </Box>
            <Box>
                <Icon as={DiMongodb} />
                <Text>MongoDB</Text>
            </Box>

            <Box>
                <Icon as={SiExpress} />
                <Text>Express</Text>
            </Box>
            <Box>
                <Icon as={DiNodejsSmall} />
                <Text>NodeJS</Text>
            </Box>
          </Stack>  

        </Box>
    )
}