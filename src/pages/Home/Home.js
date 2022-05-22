import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import PageTitle from '../../hooks/PageTitle';
import Categories from '../Categories/Categories';
import Counter from '../Counter/Counter';
import CTA from '../CTA/CTA';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div className='homePage'>
    <PageTitle title='Home'/>
      <HeroBanner/>
      <Categories/> 
      <Products/>
      <CTA/>
      <Counter/>
    </div>
  );
};

export default Home;