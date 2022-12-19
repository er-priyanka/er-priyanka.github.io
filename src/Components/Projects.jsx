import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"
import sendinblue from "../Images/sendinblue.png";
import campaignmonitor from "../Images/campaign_monitor.png";
import learnDigitalGoogle from "../Images/learndigital.google.png";


const projects = [
    {
        image:sendinblue,
        title:"Sendinblue Clone",
        description:"Sendinblue is a digital marketing platform used to grow business by using some tools like Email marketing, SMS marketing, Automation, etc.",
        github:"https://github.com/er-priyanka/dizzy-stitch-9009",
        deployed_Link:"https://isnt-shahanepriyankas01-gmail-com-awesome-3b9d4.netlify.app/",
        stacks:["ReactJS", "Chakra-UI", "Json-server"]
    },
    {
        image:campaignmonitor,
        title:"Campaign Monitor Clone",
        description:"Campaign monitor is used to build an email campaigns with creative templates.",
        github:"https://github.com/PriyanshuPatil/native-order-609",
        deployed_Link:"https://glittering-lamington-8ed8bb.netlify.app/home.html",
        stacks:["HTML", "CSS", "JavaScript", "Local Storage"]
    },
    {
        image:learnDigitalGoogle,
        title:"LearnDigital.withGoogle clone",
        description:"It is an educational platform which provides some online courses.",
        github:"https://github.com/er-priyanka/posh-window-3045",
        deployed_Link:"https://nimble-longma-c92858.netlify.app/",
        stacks:["HTML", "CSS", "JavaScript", "Local Storage"]
    }
]
export const Projects = ()=>{

    return (
       <section id="projects">

        <Box p="10" py="40px"  >
        <Heading color= "white" my="10">Here are my project work</Heading>
        <Grid
        gap={10}
        m="auto"
        templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', xl:'repeat(2, 1fr)'}}
        >
            {
               projects.map((item, i)=>(
                <GridItem key={i} border="1px" borderColor="gray.400" borderRadius="xl" p="20px">
                <Stack color="whiteAlpha.800" spacing="3" textAlign="left">
                <Image w="100%" src={item.image} alt='Image' />
                    <Heading fontSize="xl">{item.title}</Heading>
                    <Text  minH="80px" w="100%">{item.description}</Text>
                    <Heading fontSize="xl">Tech Stacks</Heading>
                    <HStack>
        
                        {
                            item.stacks.map((el, i)=>(
                                <Text key={i}>{el}</Text>
                            ))
                        }
                    </HStack>
                    
                    <Flex gap="2">
                        <Button colorScheme='blue'>
                        <Link target="_blank" href={item.github}>Code</Link> 
                        </Button>
                        <Button colorScheme="red">
                            <Link target="_blank" href={item.deployed_Link}>Go Live</Link>
                        </Button>
                    </Flex>
                </Stack>             
                </GridItem>
               )) 
                
             }
            
        
        </Grid>

        </Box>
       </section>
    )
}