import React from 'react';
import { Icon, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Icon as={FaShoppingCart} w={6} h={6} />
      <Badge 
        style={{ position: 'absolute', top: '-1px', right: '-1px' }} 
        borderRadius='full' 
        px='2' 
        colorScheme='red'>
        3
      </Badge>
    </div>
  );
};

export default CartWidget;

