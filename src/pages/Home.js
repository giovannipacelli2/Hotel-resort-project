import React from 'react'
import { Link } from 'react-router-dom';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

/*----------------------IMPORT-STYLE---------------------*/

import StyledHero from '../components/StyledHero';

export default function Home() {
  return (
    <>
      <Hero>

        <Banner 
          title='luxurious rooms' 
          subtitle='Camere deluxe a partire da 200€' 
        >
          <Link to='/rooms' className='btn-primary'>
            le nostre camere
          </Link>
        </Banner>

      </Hero>

      <Services/>

      <FeaturedRooms />
      <br/><br/>
    </>
  )
}
