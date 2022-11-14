import './Purshaseform.css'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Purshaseform = () => {

    const [purchase, setPurchase] = useState(false)

    return(
        <div style={{display: "block", padding: "10px", margin: "4%", background: "white"}} className='card text-center col-11'>
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

                        if(!values.address){
                            formerrors.address = 'Ingresa una Dirección'
                        }

                        return formerrors
                    }}

                    onSubmit={(values, {resetForm}) => {
                        resetForm();
                        console.log('Se envio formulario');
                        setPurchase(true)

                        setTimeout(() => setPurchase(false)
                        , 2000)
                    }}
                >

                    {({ errors }) => (
                        <Form className='formcontainer form'>
                        <div className='formcontainer'>
                            <label className='formcontainer' htmlFor='name'>Nombre: </label>

                            <Field
                            className='formcontainer' 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Ingresa tu Nombre Completo' 
                            />
                            <ErrorMessage name='name' component={() =>(
                                <div className="error">{errors.name}</div>
                            )}/>
                        </div>

                        <div className='formcontainer'>
                            <label className='formcontainer' htmlFor='email'>Correo: </label>
                            <Field 
                                className='formcontainer' 
                                type='email' 
                                id='email' 
                                name='email' 
                                placeholder='Ingresa tu Correo' 
                            />
                            <ErrorMessage name='email' component={() =>(
                                <div className="error">{errors.email}</div>
                            )}/>
                        </div>

                        <div className='formcontainer'>
                            <label className='formcontainer' htmlFor='contry'>Pais: </label>
                            <Field 
                                className='formcontainer'
                                as='select'
                                id='contry' 
                                name='contry' 
                            >   
                                <option className='formcontainer' value=""></option>
                                <option className='formcontainer' value="Colombia">Colombia</option>
                                <option className='formcontainer' value="Argentina">Argentina</option>
                                <option className='formcontainer' value="Mexico">Mexico</option>
                            </Field>
                        </div>

                        <div className='formcontainer'>
                        <label className='formcontainer' htmlFor='address'>Dirección: </label>
                            <Field className='formcontainer' id='address' name='address' as='textarea' placeholder='Ingresa tu Dirrección Ej Carrera 123 # 1A - 11 Torre: Almedra Apto: 101'/>
                            <ErrorMessage name='address' component={() =>(
                                <div className="error">{errors.address}</div>
                            )}/>
                        </div>

                        <div className='formcontainer form-check'>
                            <label className='formcontainer form-check-label' htmlFor='sex'>Sexo: </label>
                            <label className='formcontainer form-check-label' >
                                <Field className='formcontainer form-check-input' id='SexM' type='radio' name='sex' value='Mujer'/>Mujer
                            </label>
                            <label className='formcontainer form-check-label'>
                                <Field className='formcontainer form-check-input' id='SexH' type='radio' name='sex' value='Hombre'/>Hombre
                            </label>   
                        </div>

                        <button style={{margin: "10px"}} className="btn rounded-5 btn-warning" >Finalizar Compra</button>

                        {purchase && <p className='success formcontainer'>La compra fue existosa, En breve Informaremos el Id de Compra</p>}
                    </Form>        
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Purshaseform