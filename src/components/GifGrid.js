import React from 'react'

export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=ponRnFjJ9XR8RVL6DRZV7mzJKBRnBREU';

        const resp =  await fetch( url );

        const data = await resp.json();

        console.log(data);

    }

    getGifs();

    
    return (
        <div>
            <h3>  { category } </h3>
        </div>
    )
}