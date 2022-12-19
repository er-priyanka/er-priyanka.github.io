import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Link, Stack, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react";
import {GiHamburgerMenu, GiSkills} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";
import {FaProjectDiagram} from "react-icons/fa";
import {BsPersonPlusFill} from "react-icons/bs";

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
                <DrawerContent bgColor="blue.800">
                    <DrawerCloseButton color="whiteAlpha.900" />
                    <DrawerHeader color="whiteAlpha.900" borderBottomWidth='1px' borderColor="whiteAlpha.500" >
                        Menu
                    </DrawerHeader>

                    <DrawerBody color="whiteAlpha.700">
                        <Stack mt="5">
                            <Link href="#">
                            <Icon mr="4" as={AiFillHome} />
                            Home
                            </Link>

                            <Link href="#aboutMe">
                            <Icon mr="4" as={BsPersonPlusFill} />
                            About me
                            </Link>

                            <Link href="#skills">
                            <Icon mr="4" as={GiSkills} />
                            Skills
                            </Link>

                            <Link href="#projects">
                            <Icon mr="4" as={FaProjectDiagram} />
                            Projects
                            </Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}