import React, { Component } from 'react';
import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {

    state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type:'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
    };

    getData = async ()=>{
      try {
        let response = await Client.getEntries({
          content_type: "beachResortRoom",
        });

        let rooms = this.formatData([...response.items, ...items]);

        let featuredRooms = rooms.filter( room => room.featured === true );

        let maxPrice = Math.max(...rooms.map(item => item.price));
        
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState( (prevState)=>{
          return {
            ...prevState,
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize
          }
        } );

      } catch (error) {
        console.log(error);
      }
    }

    componentDidMount(){
      this.getData();
    }

    formatData(items){
      let tempItems = items.map(item => {

        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let room = { 
          ...item.fields,
          images: images,
          id: id
        };

        return room;

      });

      return tempItems;
    }

    getRoom = (slug) => {
      let tempRooms = [...this.state.rooms];

      const room = tempRooms.find((room) => room.slug === slug);

      return room;
    };
    
    handleChange = (e)=>{

      e.preventDefault();
      const target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState(
        {
          [name]: value
        },
        this.filterRooms
      );
    };

    filterRooms = () => {

      let { rooms, type, capacity, price, maxPrice, minSize, maxSize, breakfast, pets } =
        this.state;

      // all the rooms
      let tempRooms = [...rooms];

      // transform value in Number

      capacity = parseInt(capacity)
      price = parseInt(price)

      // FILTER BY TYPE

      if ( type !== 'all' ) {
        tempRooms = tempRooms.filter( item => item.type === type );
      }

      // FILTER BY CAPACITY

      if ( capacity !== 1 ) {
        tempRooms = tempRooms.filter( room => room.capacity >= capacity );
      }

      // FILTER BY PRICE

      if ( price >= 0 && price <= maxPrice ) {
        tempRooms = tempRooms.filter( room => room.price <= price );
      }

      // FILTER BY SIZE

      tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize );

      // FILTER BREAKFAST

      if ( breakfast ) {
        tempRooms = tempRooms.filter( room => room.breakfast === true );
      }

      // FILTER PETS

      if ( pets ) {
        tempRooms = tempRooms.filter( room => room.pets === true );
      }

      // CHANGE STATE
      this.setState(
        {
          sortedRooms: tempRooms,
        }
      )

    };

    render() {

      return (
        <RoomContext.Provider 
          value= { 
            {
              ...this.state,
              getRoom: this.getRoom,
              handleChange: this.handleChange,
              filterRooms: this.filterRooms
            } 
          }
        >
          { this.props.children }
        </RoomContext.Provider>
      )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return <RoomConsumer>
      {
        (value)=> <Component {...props} context={value} />
      }
    </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext };
