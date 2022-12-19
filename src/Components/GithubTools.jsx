import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';


export const GithubTools = ()=>{
    return (
        <Box
        p="10" 
       color="whiteAlpha.700"
    //    scrollBehavior="smooth" 
        >
            <Heading color="white">Github Calendar</Heading>
            
            <Box my="10">
                <GitHubCalendar username="er-priyanka">
                <ReactTooltip type="light" delayShow={20} />
                </GitHubCalendar>
            </Box>
           

            
            <Heading color="white">Github Statistics</Heading>

            <Flex my="10" direction={{base:"column", md:"row"}} gap={4}>
                <Text><img align="center" src="https://github-readme-stats.vercel.app/api?username=er-priyanka&show_icons=true&locale=en" alt="er-priyanka" />
                </Text>

                <Text><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=er-priyanka&" alt="er-priyanka" /> </Text>
            </Flex>

           

            
           
       </Box>
       
    )
}