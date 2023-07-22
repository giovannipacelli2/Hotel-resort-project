import React, { useState, useEffect, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";

/*---------------------IMPORT-CONTEXT--------------------*/

import { RoomContext } from "../context";

/*--------------IMPORT-FROM-REACT-ROUTER-DOM-------------*/

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/*--------------------IMPORT-COMPONENT-------------------*/

import Hero from "../components/Hero";
import Banner from "../components/Banner";

/*----------------------IMPORT-STYLE---------------------*/

import StyledHero from '../components/StyledHero';

export default function SingleRoom() {
  const { slug } = useParams();

  const initialState = {
    slug: "",
    defaultBcg: defaultBcg,
  };

  const [state, setState] = useState(initialState);

  //Import context
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        slug: slug,
      };
    });
  }, [slug]);

  if (!room) {
    return (
      <div className="error">

        <h3>Nessuna camera trovata...</h3>

        <Link to="/" className="btn-primary">
          torna alla home
        </Link>

      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [ mainImg, ...defaultImg ] = images;

  return (
    <>
      <StyledHero img={ mainImg || state.defaultBcg }>

        <Banner title={`${name} room`}>
          <Link to="/" className="btn-primary">
            torna alla home
          </Link>
        </Banner>

      </StyledHero>

    <section className="single-room">

      <div className="single-room-images">
        {
          defaultImg.map( (item, index)=> {
            return <img key={index} src={item} alt={name} />
          } )
        }
      </div>

        <div className="single-room-info">

          <article className="desc">
            <h3>Dettagli</h3>
            <p>{ description }</p>
          </article>

          <article className="info">
            <h3>info</h3>
            <h6>prezzo : {price}€</h6>
            <h6>Grandezza : {size} SQFT</h6>
            <h6>Capacità massima : { capacity>1 ? `${capacity} persone` : `${capacity} persona` }</h6>
            <h6>{ pets ? 'animali ammessi' : 'animali non ammessi' }</h6>
            <h6>{ breakfast && 'Colazione inclusa ' }</h6>
          </article>

        </div>

    </section>

    <section className="room-extras">
      <h6>extra</h6>
      <ul className="extras">
        {
          extras.map((item, index)=>{
            return <li key={index}>
              - {item}
            </li>
          })
        }
      </ul>
    </section>

    </>
  );
}
