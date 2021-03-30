import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvents = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        };
        fetch('http://localhost:5055/addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventData)
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    };
    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8e96473aee6d69f48246b252aa0ed275');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register} />
                <br/>
                <input type="file" name="exampleRequired" onChange={handleImgUpload} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;