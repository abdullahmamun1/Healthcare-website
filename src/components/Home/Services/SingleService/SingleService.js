import React from 'react';
import { useParams } from 'react-router';

const SingleService = (props) => {
    const {id, name, description, img} = props.service;
    const {serviceId} = useParams()
    console.log(serviceId, props);

 

    return (
        <div>{
            serviceId === id && <div className="ml-10 my-10 pt-20 my-20">
                <h1 className="font-semibold text-3xl mb-10 custom-color text-center">Service No. {serviceId} Details</h1>
            <img alt="" width="300px" src={img}></img>
      
            <h1 className="text-3xl font-bold mb-2 mt-2">{name}</h1>
            <p className="w-1/3">{description}</p>
        </div>
                
        }
        </div>
      
      

    )
//   for (const detail of service) {
//     return (
//         <div className="my-10 pt-20">
//             <img class="product-image" alt="" src={detail.image}></img>
      
//             <h3>{detail.name}</h3>
//             <p>{detail.description}</p>
//         </div>
      
      

//     )}
}


export default SingleService;