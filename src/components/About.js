import { Box, Heading, Text } from "@chakra-ui/react"

const About = () => {
    return (
        <Box p={4}>
            <Heading as="h3" size='md'>About</Heading>
            <Text fontSize='sm' >
                I am ready to take the challenges as a software engineer.  I love seeing problems being solved, and I try to make things simpler.  I am always looking for new things to learn.
            </Text>
        </Box>
    )
}

export default About