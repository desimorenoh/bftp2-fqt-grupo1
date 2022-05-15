import React, {useState} from 'react';
import "./New.css"
import {FaRegPlusSquare} from 'react-icons/fa';
import {FaRegMinusSquare} from 'react-icons/fa';
import {useLocation, useNavigate, redirect} from "react-router-dom";


export const New = (props) => {

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        codigo: '',
        descripcion: '',
        category: '',
        cantidad: '',
        add: '',
        subtract: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.addStock(datos)
            .then(() => navigate("/"))

    }

    return (
        <div className='section-form-stock'>
            <section className="stock-form-section">
                <div className="stock-form-wrapper">

                    <h1>{data ? 'Modificar Artículo' : 'Agregar Nuevo Artículo'}</h1>
                    <div className="stock-form-container">
                        <form className="edit-stock-form" onSubmit={enviarDatos} action="">

                            <div className="stock-form-group">
                                <label htmlFor="">Código:</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.codigo}
                                       onChange={handleInputChange}
                                       id="codigo"
                                       name="codigo"/>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Descripción:</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.descripcion}
                                       onChange={handleInputChange}
                                       id="descripcion"
                                       name="descripcion"/>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Categoría:</label>
                                <select value={datos.category} className="stock-form-control"
                                        onChange={handleInputChange}
                                        name="category"
                                        id="category">
                                    <option className="select-cat">Seleccionar Categoría</option>
                                    <option value="Prendas">Prendas</option>
                                    <option value="Complementos">Complementos</option>
                                    <option value="Cosmeticos">Cosméticos</option>
                                </select>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Cantidad:</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.cantidad}
                                       min="1" max="10000"
                                       onChange={handleInputChange}
                                       id="cantidad"
                                       name="cantidad"/>
                            </div>

                            <div className="input-add-subtract">

                                <div className="stock-form-calculo">
                                    <label className="label-add" htmlFor=""><FaRegPlusSquare className="calculo-suma"/></label>
                                    <input type="text"
                                           className="stock-form-control add-input"
                                           value={datos.add}
                                           min="1" max="10000"
                                           onChange={handleInputChange}
                                           id="add"
                                           name="add"/>
                                </div>

                                <div className="stock-form-calculo">
                                    <label className="label-add" htmlFor=""><FaRegMinusSquare
                                        className="calculo-resta"/></label>
                                    <input type="text"
                                           className="stock-form-control add-input"
                                           value={datos.subtract}
                                           min="1" max="10000"
                                           onChange={handleInputChange}
                                           id="subtract"
                                           name="subtract"/>
                                </div>
                            </div>


                            <div className="btn-edit-container">
                                <button type="submit" className="css-button-rounded--red">Guardar</button>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}

