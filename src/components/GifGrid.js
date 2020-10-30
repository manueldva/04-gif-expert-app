import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, []); 

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=ponRnFjJ9XR8RVL6DRZV7mzJKBRnBREU';

        const resp =  await fetch( url );

        const { data }  = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        
        console.log(gifs);
        setImages( gifs );
    }

    //getGifs();

    
    return (
        <div>
            <h3>{ category }</h3>
           <ol>
            {
                images.map( ({ id, title }) => (
                    <li key={ id }>
                        { title } 
                    </li>  
                ))
            }
           </ol>
        </div>
    )
}
