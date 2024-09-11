import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    Box
  } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'
import styles from './HomeDrawer.module.css'

  const HomeDrawer = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box className={styles.ButtonDrawer}>
        <Button as='button' colorScheme='purple' borderRadius={0} onClick={onOpen} height={100}>
            <ArrowBackIcon color='#fff' height={20} width={12}/>
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent className={styles.DrawerText}>
            <DrawerHeader bg='#805AD5' color='#fff' justifyContent='center' alignItems={'center'} fontSize='xxx-large' borderBottomWidth='1px'>Mystica 🔮</DrawerHeader>
            <DrawerBody as='ul'>
              <p>My Avatars</p>
              <p>Create New Avatar</p>
              <p>Account Settings</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }

export default HomeDrawer;