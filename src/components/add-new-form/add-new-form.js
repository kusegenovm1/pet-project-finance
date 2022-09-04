import React, { Component, useState } from 'react';
import './add-new-form.css';
import {itemsMinus, itemsPlus} from '../shared/dataArrays'

class AddNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: itemsMinus,
            maxID: 5
        };      
        
    }
    
    onValueChange = (e) => {
        this.setState({
            // [e.target.name] : e.target.value
            newItem: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newItem);
        this.setState((state) => ({
            maxID: state.maxID+1,
            data: [...state.data, {id: state.maxID, name: state.newItem}],
            showComponent: false,
        }))
    }
    const

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <h1>Введите новый элемент</h1>
                    <input
                        type="text" 
                        placeholder='Элемент' 
                        className='input'
                        value={this.state.newItem}
                        onChange={this.onValueChange}/>
                    <input
                        type="submit" 
                        value='Сохранить' 
                        className='btn-submit'/>
                </form>
            </div>
        );
    }       
}

export default AddNewForm;