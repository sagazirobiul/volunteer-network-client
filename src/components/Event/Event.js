import React from 'react';

const Event = ({event, handleDelete}) => {
   
    return (
        <div>
            <img src={event?.imageURL} alt=""/>
            <h2>{event?.name} <button onClick={() => handleDelete(event?._id)}>Delete</button> </h2>
        </div>
    );
};

export default Event;