import React, { Component } from 'react'

/*---------------------IMPORT-CONTEXT--------------------*/

import { RoomContext } from '../context';

/*--------------------IMPORT-COMPONENT-------------------*/

import Loading from '../components/Loading';
import Room from '../components/Room';
import Title from '../components/Title';

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;

  render() {

    let { loading, featuredRooms: rooms } = this.context; // importa featuredRooms come room

    rooms = rooms.map( (room) => {
      return <Room key={room.id} room={room}/>
    } );

    return (
      <section className='feature-rooms'>
        <Title title='featured rooms' />
        <div className="featured-rooms-center">
          { loading ? <Loading text='Caricamento camere...'/> : rooms }
        </div>

        
      </section>    
      )
  }
}
