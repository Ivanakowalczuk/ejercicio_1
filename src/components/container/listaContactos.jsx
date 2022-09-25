import React from 'react';
// import PropTypes from 'prop-types';
import { ContactoClass } from '../../models/contacto.class';
import Contacto from '../pure/contacto';


const ListaContactos = () => {
    const defaultContacto = new ContactoClass('Ivana', 'Kowalczuk', 'ivanakowalczuk@gmail.com', false);
    return (
        <div>
             <div>
                Tus contactos:
            </div>
            
            <Contacto contacto={defaultContacto}></Contacto>
        </div>
    );
};


export default ListaContactos;
