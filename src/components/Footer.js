import { Box, Link, Icon, Flex, Container} from '@chakra-ui/react'

import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <Container bg='#161619' color='white' > 
            <Flex display='flex' ml={8} mr={8} align="center" opacity={0.6}  justify="space-between">
                <Link href="https://www.linkedin.com/in/stephenlhc/" target="_blank" p={2}>
                    <Icon as={IoLogoLinkedin} fontSize='30px'/> 
                </Link>
                <Link href="https://github.com/StephenLHChan/" target="_blank" p={2}>
                    <Icon as={IoLogoGithub} fontSize='30px'/> 
                </Link>
                <Link href="https://www.instagram.com/stephenc.3/" target="_blank" p={2}>
                    <Icon as={IoLogoInstagram} fontSize='30px'/>
                </Link>  
            </Flex>
            <Box align="center" opacity={0.6} fontSize="xs" p={1}>
                &copy; {new Date().getFullYear()} Stephen LH Chan. All Rights Reserved.
            </Box>
        </Container>
    )
}

export default Footer