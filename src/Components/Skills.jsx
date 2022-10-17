import { Box, Grid, GridItem, Icon,  Text } from "@chakra-ui/react";
import { AiFillHtml5 } from 'react-icons/ai';
import {DiCss3, DiJavascript, DiReact, DiMongodb, DiNodejsSmall} from 'react-icons/di'
import {SiExpress} from "react-icons/si";

export const Skills = ()=>{
    return (
        <Box
       
        p="10"
       
        >
          <Grid 
          color="whiteAlpha.800"
          templateColumns={{base:"repeat(2, 1fr)", md:"repeat(4, 1fr)", lg:"repeat(6, 1fr)" }}
          gap={10}
          >
            <GridItem >
                <Icon as={AiFillHtml5} />
                <Text>HTML</Text>
            </GridItem>
            
            <GridItem>
                <Icon as={DiCss3} />
                <Text>CSS</Text>
            </GridItem>

            <GridItem>
                <Icon as={DiJavascript} />
                <Text>JavaScript</Text>
            </GridItem>

            <GridItem>
                <Icon as={DiReact} />
                <Text>ReactJS</Text>
            </GridItem>
            <GridItem>
                <Icon as={DiMongodb} />
                <Text>MongoDB</Text>
            </GridItem>

            <GridItem>
                <Icon as={SiExpress} />
                <Text>Express</Text>
            </GridItem>
            <GridItem>
                <Icon as={DiNodejsSmall} />
                <Text>NodeJS</Text>
            </GridItem>
          </Grid>  

        </Box>
    )
}