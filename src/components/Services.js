import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan,FaBeer } from 'react-icons/fa';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Title from './Title';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title:'Free cocktails', 
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit fugiat velit eveniet, temporibus magni corrupti quisquam.'
            },
            {
                icon: <FaHiking/>,
                title:'Endless Hiking', 
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit fugiat velit eveniet, temporibus magni corrupti quisquam.'
            },
            {
                icon: <FaShuttleVan/>,
                title:'Free shuttle', 
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit fugiat velit eveniet, temporibus magni corrupti quisquam.'
            },
            {
                icon: <FaBeer/>,
                title:'Strongest Beer', 
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit fugiat velit eveniet, temporibus magni corrupti quisquam.'
            },


        ]
    };

  render() {
    return (
      <section className='services' >

        <Title title='services'></Title>
        <div className="services-center">
            {
                this.state.services.map( (item, index)=> {
                    return (
                        <article key={index} className='service' >
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                    );
                } )
            }
        </div>
      </section>
    )
  }
}
