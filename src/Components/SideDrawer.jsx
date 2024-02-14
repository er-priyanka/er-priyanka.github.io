import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Link, Stack, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react";
import {GiHamburgerMenu, GiSkills} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";
import {FaProjectDiagram} from "react-icons/fa";
import {BsPersonPlusFill} from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { TbNotes } from "react-icons/tb"

export const SideDrawer = ()=>{
    const {isOpen, onOpen, onClose} = useDisclosure();
    const firstField = useRef();

    return (
        <>
          <Button bg="none" onClick={onOpen} > 
                <Icon fontSize='2xl' as={GiHamburgerMenu}/>
          </Button>

            <Drawer
            isOpen={isOpen}
            placement='left'
            initialFocusRef={firstField}
            onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent 
                bgColor="blackAlpha.900"
                >
                    <DrawerCloseButton fontSize="xl" color="whiteAlpha.900" />
                    <DrawerHeader 
                    color="whiteAlpha.900" 
                    borderBottomWidth='1px' 
                    borderColor="whiteAlpha.500"
                    fontSize="3xl"
                     >
                        Menu
                    </DrawerHeader>

                    <DrawerBody color="whiteAlpha.700">
                        <Stack mt="5" fontSize="3xl">
                            <Link 
                            href="#"
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            >
                            <Icon mr="4" as={AiFillHome} />
                            Home
                            </Link>

                            <Link 
                            href="#aboutMe"
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            >
                            <Icon mr="4" as={BsPersonPlusFill} />
                            About me
                            </Link>

                            <Link 
                            href="#skills"
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            >
                            <Icon mr="4" as={GiSkills} />
                            Skills
                            </Link>

                            <Link 
                            href="#projects"
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            >
                            <Icon mr="4" as={FaProjectDiagram} />
                            Projects
                            </Link>

                            <Link 
                            href="#contact"
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            >
                            <Icon mr="4" as={IoMdContact} />
                            Contact
                            </Link>


                            <Link   
                            target="_blank" 
                            _hover={{
                                textDecor:"none",
                                color:"blue.400" 
                            }}
                            display="flex"
                            alignItems="center"
                            href="https://drive.google.com/file/d/1BrfFaqYC1AdFkT648qR7OeutZHXU7yY5/view?usp=sharing" >
                            <Icon as={TbNotes} mr="4" />
                            Resume
                            </Link>
                           
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}