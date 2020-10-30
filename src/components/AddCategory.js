import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');
    
    // (e) es el evento
    //para recuperar el valor ingresado por el usuario en el input
    const handleInputChange =  ( e ) => {setinputValue( e.target.value );
    }

    // manejar el ener
    const handleSubmit =  ( e ) => {
        e.preventDefault();
       
        if( inputValue.trim().length > 2 ){ // validacion mayor a 2 caracteres

            setCategories( cats => [ ...cats, inputValue ]); 
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                onChange= { handleInputChange } // ser carga el valor recuperado en el onchange
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

