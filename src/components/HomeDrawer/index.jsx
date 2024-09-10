import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'
import styles from './HomeDrawer.module.css'

  const HomeDrawer = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      < >
        <Button colorScheme='purple' borderRadius={0} onClick={onOpen} height={10}>
            <ArrowBackIcon color='#fff' height={10} width={8}/>
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent className={styles.DrawerText}>
            <DrawerHeader justifyContent='center' alignItems={'center'} fontSize='xx-large' borderBottomWidth='1px'>Mystica 🔮</DrawerHeader>
            <DrawerBody>
              <p>Home</p>
              <p>Wardrobe</p>
              <p>Create New Avatar</p>
              <p>Account Settings</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default HomeDrawer;