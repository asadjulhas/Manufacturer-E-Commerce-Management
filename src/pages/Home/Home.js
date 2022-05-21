import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import PageTitle from '../../hooks/PageTitle';

const Home = () => {
  return (
    <div className='homePage'>
    <PageTitle title='Home'/>
      <HeroBanner/>
      
    </div>
  );
};

export default Home;