import React from 'react';
import Product from './components/Product';

const products = 
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: '57',
  }
//   {
//     id: 2,
//     title: 'Supermajority: The Fantasy Congress League',
//     description: 'Earn points when your favorite politicians pass legislation.',
//     votes: 44,
//     url: '#',
//   },
//   {
//     id: 3,
//     title: 'Tinfoild: Tailored tinfoil hats',
//     description: 'We already have your measurements and shipping address.',
//     votes: 20,
//     url: '#',
//   },
//   {
//     id: 4,
//     title: 'Haught or Naught',
//     description: 'High-minded or absent-minded? You decide.',
//     votes: 89,
//     url: '#',
//   },
// ];

const ProductList = (props) => {
  return (
    <div>
      <Product 
      id={products.id}
      title={products.title}
      description={products.description}
      url={products.url}
      vote={products.votes}
      />
    </div>
  );
}


export default ProductList;
