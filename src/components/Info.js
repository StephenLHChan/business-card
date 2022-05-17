import { Box, Button, Image, Text, Heading, Link, SimpleGrid } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { IoLogoLinkedin } from "react-icons/io5";
import profilePic from '../public/profile-picture.png'


const Info = () => {
    return (
        <Box align='center'>
            <Image src = {profilePic}/>
            <Heading color='#FFFFFF' as='h1' p={2}>
                Stephen LH Chan
            </Heading>
            <Box maxWidth='65%'>
                <Text fontSize='xs' color='#F3BF99'> 
                    Software Engineer-to-be | Problem Solver | Troubleshooter | BEng(Computer Science)
                </Text>
            </Box>
            <SimpleGrid p={2} maxWidth='70%' columns={[1, 2, 2]} spacing={0.5} centerContent color="#1A1B21">
                <Link href = "mailto: stephen.lh.chan@gmail.com" target="_blank">
                    <Button leftIcon={<MdEmail />}> Email</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/stephenlhc/" target="_blank">
                    <Button leftIcon={<IoLogoLinkedin />} colorScheme="linkedin">LinkedIn</Button>
                </Link> 
            </SimpleGrid> 
        </Box>
    )
}

export default Info