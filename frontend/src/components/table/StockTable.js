import React from "react";
import "./Table.css";
import {FaEdit} from 'react-icons/fa';
import {FaRegTrashAlt} from 'react-icons/fa';
import {Link} from "react-router-dom";


const StockTable = ({stocks, deleteStock}) => {


    return (


        <div className="table-container">
            <h1 className="categoryList-title">Stock</h1>


            <section className='categoryList'>
                <div className='table-list'>
                    <tr className='category-table-title'>
                        <th className='stock-th'>Código</th>
                        <th className='stock-th'>Descripción</th>
                        <th className='stock-th'>Categoría</th>
                        <th className='stock-th'>Cantidad</th>
                        <th className='stock-th'/>
                        <th className='stock-th'/>
                    </tr>

                    {stocks

                        .map(stock =>
                            <tr className='category-table-row' key={stock.id} stock={stock}>
                                <td className="category-td">{stock.codigo}</td>
                                <td className="category-td">{stock.descripcion}</td>
                                <td className="category-td">{stock.category}</td>
                                <td className="category-td quantity" style={stock.cantidad === 0 ? {
                                    fontSize: 25,
                                } : {}}>{stock.cantidad}</td>

                                <td className="category-td-link">

                                    <Link className="btn-orange-link" to="/new"
                                          state={{data: stock}}><FaEdit className="edit-pen" fixedWidth
                                                                        style={{color: 'blue'}}/></Link>
                                    <div className="code2">Modificar</div>
                                </td>

                                <td className="category-td-delete">
                                    <FaRegTrashAlt className="delete-trash" onClick={() => deleteStock(stock.id)}
                                                   fixedWidth
                                                   style={{color: 'red'}}/>
                                    <div className="code3">Eliminar</div>
                                </td>
                            </tr>
                        )}
                </div>
            </section>
        </div>
    );
}


export default StockTable;