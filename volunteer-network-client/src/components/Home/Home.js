import React, {useEffect, useState} from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([])
    const [isDeleted, setDeleted] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5055/events')
        .then(res =>  res.json())
        .then(data => {
            setEvents(data)
            setDeleted(false)
        });
    }, [isDeleted])
    const handleDelete = (id) => {
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            setDeleted(data)
        })
    }
    return (
        <div>
            {
                events.map(event => <Event key={event._id} event={event} handleDelete={handleDelete}/>)
            }
        </div>
    );
};

export default Home;