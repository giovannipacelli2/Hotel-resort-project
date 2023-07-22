import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading( {text} ) {
  return (
    <div className='loading'>
        <h4>{ text }</h4>
        <img src={ loadingGif } alt="Loading gif" />
    </div>
  )
}

Loading.defaultProps = {
  text: 'Caricamento in corso...'
}