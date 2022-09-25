import React from 'react';
import PropTypes from 'prop-types';
import { ContactoClass } from '../../models/contacto.class';

const Contacto = ({contacto}) => {
    return (
        <div>
               <h3>
                Name: { contacto.nombre }
            </h3>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h3>
                email: { contacto.email }
            </h3>
            <h5>
                ¿Está conectado?: { contacto.conectado ? 'Contacto en línea' : 'Contacto no disponible'}
            </h5>
        </div>
    );
};


Contacto.propTypes = {
    contacto: PropTypes.instanceOf(ContactoClass),

};


export default Contacto;
