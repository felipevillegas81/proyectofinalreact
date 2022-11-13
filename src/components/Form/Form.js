import './Form.css'
import { useState } from 'react';
import { Formik } from 'formik';

const Form = () => {

    const [purchase, setPurchase] = useState(false)

    return(
        <div style={{display: "block", margin: "10px 20px 20px 0px", background: "white"}} className='card text-center col-sm-12'>
            <div style={{background: "white"}} className='card-body'>

                <Formik className='formcontainer form'
                    
                    initialValues={{
                        name: '',
                        email: ''
                    }}

                    validate={(values) => {
                        let formerrors = {};

                        if(!values.name){
                            formerrors.name = 'Ingresa un Nombre'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                            formerrors.name = 'Ingresa un Nombre Valido (Solo se Admiten Letras y Espacios)'
                        }

                        if(!values.email){
                            formerrors.email = 'Ingresa un Correo'
                        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            formerrors.email = 'Ingresa un Correo Valido correo@correo.com'
                        }

                        return formerrors
                    }}

                    onSubmit={(values, {resetForm}) => {
                        resetForm();
                        console.log('Se envio formulario');
                        setPurchase(true)
                    }}
                >

                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                        <form className='formcontainer form' onSubmit={handleSubmit}>
                        <div className='formcontainer'>
                            <label className='formcontainer' htmlFor='name'>Nombre: </label>

                            <input 
                            className='formcontainer' 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Ingresa tu Nombre Completo' 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        </div>

                        <div className='formcontainer'>
                            <label className='formcontainer' htmlFor='email'>Correo: </label>
                            <input 
                                className='formcontainer' 
                                type='email' 
                                id='email' 
                                name='email' 
                                placeholder='Ingresa tu Correo' 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <button style={{margin: "10px"}} className="btn rounded-5 btn-warning" >Finalizar Compra</button>

                        {purchase && <p className='success formcontainer'>La compra fue existosa</p>}
                    </form>        
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Form