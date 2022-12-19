import { Badge, Box, Button, Center, Flex, Heading, HStack, Icon, Image, Link, Stack, Text } from "@chakra-ui/react"
import sendinblue from "../Images/sendinblue.png";
import campaignmonitor from "../Images/campaign_monitor.png";
import learnDigitalGoogle from "../Images/learndigital.google.png";
import engagebay from "../Images/engagebay.png";
import { useEffect, useRef, useState } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {GoPrimitiveDot} from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const projects = [
    {
        image:engagebay,
        title:"engagebay clone",
        description:"Engagebay is a digital marketing platform that provides some tools to grow business like Email, Marketing, SMS marketing, Creating forms, Automation, etc.",
        github:"https://github.com/Sakil9051/brawny-base-7995/tree/main/engagebay-clone-328",
        deployed_Link:"https://brawny-base-7995-6r5h.vercel.app/",
        stacks:[
            {name:"React", color:"red"},
            {name:"Chakra-UI", color:"blue"},
            {name:"React-router-dom", color:"pink"},
            {name:"React-responsive-carousel", color:"teal"},
            {name:"AOS Libraby", color:"orange"},
            {name:"Firebase Authentication", color:"green"},
           ]
    },
    {
        image:sendinblue,
        title:"Sendinblue Clone",
        description:"Sendinblue is a digital marketing platform used to grow business by using some tools like Email marketing, SMS marketing, Automation, etc.",
        github:"https://github.com/er-priyanka/dizzy-stitch-9009",
        deployed_Link:"https://isnt-shahanepriyankas01-gmail-com-awesome-3b9d4.netlify.app/",
        stacks:[
            {name:"ReactJS", color:"red"},
            {name:"Chakra-UI", color:"blue"},
            {name:"JavaScript", color:"pink"},
            {name:"Json-server", color:"teal"},
           ]
       
    },
    {
        image:campaignmonitor,
        title:"Campaign Monitor Clone",
        description:"Campaign monitor is used to build an email campaigns with professionally designed templates.",
        github:"https://github.com/PriyanshuPatil/native-order-609",
        deployed_Link:"https://glittering-lamington-8ed8bb.netlify.app/home.html",
        stacks:[
            {name:"HTML", color:"red"},
            {name:"CSS", color:"blue"},
            {name:"JavaScript", color:"pink"},
            {name:"Local Storage", color:"teal"},
           ]
        
    },
    {
        image:learnDigitalGoogle,
        title:"LearnDigital.withGoogle clone",
        description:"It is an educational platform which provides some online digital skills course in everything from marketing to coding and beyond.",
        github:"https://github.com/er-priyanka/posh-window-3045",
        deployed_Link:"https://nimble-longma-c92858.netlify.app/",
        stacks:[
            {name:"HTML", color:"red"},
            {name:"CSS", color:"blue"},
            {name:"JavaScript", color:"pink"},
            {name:"Local Storage", color:"teal"},
           ]
    }
    
   
]





export const Projects1 = ()=>{
    const [imgIndex, setImgIndex] = useState(0);
    const projectInputIndex = useRef(null);

    const nextState = ()=>{
        clearInterval(projectInputIndex.current);
        projectInputIndex.current = null;

        if(imgIndex === projects.length-1){
            setImgIndex(0);
        }
        else{
            setImgIndex(imgIndex + 1);
        }

        carouselInterval();
    }

    const prevState = () => {
        clearInterval(projectInputIndex.current);
        projectInputIndex.current = null;

        if(imgIndex === 0){
            
            setImgIndex(projects.length-1);
        }
        else{
            setImgIndex(imgIndex - 1);
        }

        
        carouselInterval();
    }

    const handleIcon = (indx)=>{
        clearInterval(projectInputIndex.current);
        projectInputIndex.current = null;
        setImgIndex(indx);
        carouselInterval();
    }

    const carouselInterval = ()=>{
        if(projectInputIndex.current === null){
            projectInputIndex.current = setInterval(()=>{
                
                setImgIndex(prev=>{
                    if(prev === projects.length-1)
                        return 0;
                    else
                        return prev + 1;
                });
                
            }, 5000)
        }
    }

    useEffect(()=>{
       
        carouselInterval();    

    }, [imgIndex])
    
    return (
       <section id="projects">

        <Box p="10" py="40px"  >
        <Heading color= "white" my="10">Here is some project work</Heading>
        
        
        <Box 
        pos="relative" 
        // border="1px" 
        // borderColor="gray.400" 
        borderRadius="xl" 
        bgColor="blackAlpha.500"
        p="20px"
        boxSizing="border-box"
        >
       
                <Flex
                 color="whiteAlpha.800" 
                 gap="5" textAlign="left"
                 direction={{base: "column", lg:"row"}}
                 boxSizing="border-box"
                 borderRadius="xl" 
                  >
                    <Image w={{base: "100%", lg:"45%"}} src={projects[imgIndex].image} alt='Image' />

                    <Stack  spacing="5" >
                        <Heading fontSize="2xl">{projects[imgIndex].title}</Heading>
                        <Text noOfLines={2} fontSize="xl">{projects[imgIndex].description}</Text>
                        
                        <HStack minH="50px" flexWrap="wrap" gap="2">
            
                            {
                                projects[imgIndex].stacks.map((el, i)=>(
                                    <Badge colorScheme={el.color} key={i}>{el.name}</Badge>
                                ))
                            }
                        </HStack>
                        
                        <Flex gap="2" p="5" >
                            <Button colorScheme='blue' gap={2}>
                            <Icon as={FaGithub} />
                            <Link 
                            _hover={{
                                textDecor:"none"
                            }}
                            target="_blank" 
                            href={projects[`${imgIndex}`].github}
                            >Code</Link> 
                            </Button>
                            <Button colorScheme="red" gap={2}>
                                <Icon as={BsFillArrowUpRightCircleFill} />
                                <Link 
                                _hover={{
                                    textDecor:"none"
                                }}
                                target="_blank" 
                                href={projects[`${imgIndex}`].deployed_Link}>Go Live</Link>
                            </Button>
                        </Flex>
                    </Stack>
                    


                    <ChevronLeftIcon 
                    pos="absolute"
                    top="40%"
                    left="0"
                    color={{base: "white", lg:"black"}} 
                    w="100px" 
                    h="100px"
                    onClick={prevState}
                    opacity={{base:"0", lg:"0.25"}}
                    _hover={{
                        opacity:0.75,    
                    }}
                    />

                    <ChevronRightIcon 
                    pos="absolute"
                    top="40%"
                    right ="0"
                    color="white"
                    w="100px" 
                    h="100px"
                    onClick={nextState}
                    opacity={{base:"0", lg:"0.25"}}
                    _hover={{
                        opacity:0.75,
                        
                    }}
                    />
                </Flex> 
                <Center mt="8">
                    {
                        projects.map((item, i) => (
                            <Box key={i}>
                                
                                <Icon fontSize="3xl" 
                                color={(i===imgIndex) ?"white":"whiteAlpha.200"}
                                as={GoPrimitiveDot}
                                onClick={() => handleIcon(i)}
                                  />
                            </Box>
                        ))
                    }
                </Center>            
            </Box>
       
        
        {/* <Grid
        gap={10}
        m="auto"
        templateColumns='repeat(1, 1fr)'
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
            
        
        </Grid> */}

        </Box>
       </section>
    )
}