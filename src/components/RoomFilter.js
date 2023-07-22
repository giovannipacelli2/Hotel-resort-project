import React, { useContext } from 'react';

/*---------------------IMPORT-CONTEXT--------------------*/

import { RoomContext } from '../context';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Title from '../components/Title';

const getUniqueValue = (items, value) => {
  return [...new Set( items.map(item => item[value] ) )];
}

export default function RoomFilter({rooms}) {

  const context = useContext(RoomContext);
  let {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;


  // get unique types

  let types = getUniqueValue(rooms, 'type');
  types = [ 'all', ...types ];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  // get unique capacity

  let people = getUniqueValue(rooms, 'capacity');
  
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />

      <form className="filter-form">

        {/* Room type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type" 
            id="type"
            className='form-control'
            value={type}
            onChange={handleChange}
          >
            { types }
          </select>
        </div>

        {/* Guest type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select 
            name="capacity" 
            id="capacity"
            className='form-control'
            value={capacity}
            onChange={handleChange}
          >
            { people }
          </select>
        </div>

        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Room price {price}</label>
          <input 
            type="range"
            className='form-control'
            name='price'
            id='price'
            min={minPrice}
            max={maxPrice} 
            value={price}
            onChange={handleChange}
          />
        </div>

        {/* Room Size */}
        <div className="form-group">
          <label htmlFor="minSize">Room size</label>
          <div className="size-inputs">
            <input 
              type="number"
              className='size-input'
              name='minSize'
              id='minSize'
              value={minSize}
              onChange={handleChange}
            />
            <input 
              type="number"
              className='size-input'
              name='maxSize'
              id='maxSize'
              value={maxSize}
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Room extras */}
        <div className="form-group">
          <div className="single-extra">

            <input 
              type="checkbox"
              name="breakfast"
              id="breakfast" 
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>

          </div>

          <div className="single-extra">

            <input 
              type="checkbox"
              name="pets"
              id="pets" 
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>

          </div>

        </div>

      </form>
    </section>
  );
}
