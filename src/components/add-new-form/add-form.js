import React, { useState } from 'react';
import './add-new-form.css';

const AddForm = ({items, setItems}) => {

    const [newItem, setNewItem] = useState('');

    const onSubmit = (e) => {        
        e.preventDefault();
        const newItems = {
            id: ++[...items].length,
            name: newItem,
        }        
        setItems([...items, newItems]);
        setNewItem('');
        // console.log([items]);
    }

    return (
        <div className='form'>
            <h1>Добавить новый элемент</h1>
            <form>
                <input
                    type="text" 
                    placeholder='Название категории' 
                    className='input input-item'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}/>
                <input
                    type="button" 
                    value='Сохранить' 
                    className='btn-submit'
                    onClick={onSubmit}/>
            </form>
        </div>
    );     
}

export default AddForm;