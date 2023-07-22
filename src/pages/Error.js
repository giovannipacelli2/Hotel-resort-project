import React from 'react'
import { Link }from 'react-router-dom';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
  return (
    <Hero>
      <Banner
        title='404'
        subtitle='pagina non trovata'
      >
        <Link to='/' className='btn-primary' >
          torna alla home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error