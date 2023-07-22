import React from 'react'
import { Link } from 'react-router-dom';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero' >

        <Banner
          title='Le nostre camere'
        >
          <Link to='/' className='btn-primary' >
            torna alla home
          </Link>
        </Banner>
      
      </Hero>

      <RoomContainer/>
    </>
  )
}

export default Rooms