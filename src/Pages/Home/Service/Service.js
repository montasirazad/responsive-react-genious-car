import React from 'react';
import './service.css'

const Service = (props) => {
    const { img, name, price, description } = props.service;
    return (
        <div className='service'>
            
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;