
import React, { useState } from 'react';
import  { AddCategory }   from './components/AddCategory';
import  { GifGrid }   from './components/GifGrid';
//import PropTypes from 'prop-types';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon']);
    
    /*const handleAdd = () => {
        //setCategories( [ ...categories, 'Naruto' ] );
        setCategories( cats => [ ...cats, 'Naruto' ]);
    }*/

    return ( 
        <>
            <h2>Buscador de Gifs</h2>

            <AddCategory setCategories={ setCategories } />   

            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />   
                    ))
                }
            </ol>

        </> 
    ); 
}

export default GifExpertApp;