import React from 'react'

/*---------------------IMPORT-CONTEXT--------------------*/

import { withRoomConsumer } from '../context.js';

/*-------------------IMPORT-COMPONENTS-------------------*/

import Loading from './Loading.js';
import RoomFilter from './RoomFilter.js';
import RoomList from './RoomList.js';

function RoomContainer({context}) {
  
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
