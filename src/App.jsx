import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Kanguro 3D!" />
    </ChakraProvider>
  );
}

export default App;
