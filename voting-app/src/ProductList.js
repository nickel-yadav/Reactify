import React from 'react';
import Product from './components/Product';

const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: '57',
    imageurl: 'https://images.unsplash.com/photo-1623162012953-5002981ac52d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    avatarurl: 'https://image.freepik.com/free-vector/modern-people-avatar-casual-clothes-vector-cartoon-illustration-man-with-individual-face-hair-light-digital-frame-dark-blue-computer-picture-web-profile_107791-4246.jpg',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    votes: 44,
    url: '#',
    imageurl: 'https://images.unsplash.com/photo-1575677753169-cff039a42afa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    avatarurl: 'https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg',
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    votes: 20,
    url: '#',
    imageurl: 'https://images.unsplash.com/photo-1623194279582-247ed47977b1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    avatarurl: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png',
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    votes: 89,
    url: '#',
    imageurl: 'https://images.unsplash.com/photo-1585766765962-28aa4c7d719c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    avatarurl: 'https://image.freepik.com/free-vector/cute-girl-gaming-holding-joystick-cartoon-icon-illustration-people-technology-icon-concept-isolated-flat-cartoon-style_138676-2169.jpg',
  },
];

const ProductList = (props) => {

  const  sorted_products = products.sort((a,b) => (
    b.votes - a.votes
  ));

  

  return sorted_products.map((product) => (
          <div>
            <Product 
              key={'product-' + product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              vote={product.votes}
              imageurl={product.imageurl}
              avatarurl={product.avatarurl}
            />
          </div>
  ));
}


export default ProductList;
