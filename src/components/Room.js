import React from 'react'

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';

export default function Room({room}) {

    const { name, slug, images, price } = room;

  return (
    <article className='room'>
        <div className="img-container">

            <img src={ images[0] || defaultImg } alt={`Image ${name}`} />

            <div className="price-top">
                <h6>{ price }€</h6>
                <p>a notte</p>
            </div>

            <Link to={ `/rooms/${slug}` } className='btn-primary room-link' >
                Più info
            </Link>

        </div>

        <p className='room-info'>{ name }</p>

    </article>
  )
}

Room.protoTypes = {
    room: PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
            price: PropTypes.number.isRequired,
        }
    )
};