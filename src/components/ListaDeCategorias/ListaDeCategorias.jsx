import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {
        if(e.key == "Enter") {
            console.log("It worked!");
        }
    }

    render() { 
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias'>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                </ul>
                <input 
                type="text" 
                className='lista-categorias_input'
                placeholder='Adicionar categoria'
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;
