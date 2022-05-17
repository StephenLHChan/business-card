import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interests';
import Footer from './components/Footer';
import { Box, Container } from '@chakra-ui/react';

const App = () => {
  return (
    <Container maxW="container.md" pt={10} pb={10} centerContent>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
      bg='#1A1B21' color='#DCDCDC'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </Box>
    </Container>
    
  );
}

export default App;
