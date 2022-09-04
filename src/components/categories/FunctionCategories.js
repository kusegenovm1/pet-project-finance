import React, { useState } from 'react';
import './categories.scss';
import AddForm from '../add-new-form/add-form';
import ItemList from '../ItemList/ItemList';
import AllElements from './AllElements';

function FunctionCategories () {   

    const [postItemsMinus, setPostItemsMinus] = useState([
        {id: 1, name: 'продукты'},
        {id: 2, name: 'телефон'},
        {id: 3, name: 'транспорт'},
        {id: 4, name: 'вввфы'},
    ]);
    // console.log(postItemsMinus);//массив одъектов
    // console.log(...postItemsMinus);//объект

    const [postItemsPlus, setPostItemsPlus] = useState([
        {id: 1, name: 'зарплата'},
        {id: 2, name: 'вклады'},
        {id: 3, name: 'инвестиции'},
    ]);

    const [button, setButton] = useState(false);

    return (            
        <div className='container'>
            <div className='categories minus hide-content'>
                <button className='new-item-button' onClick={() => setButton(true)} >Добавить новую категорию</button>
                <ItemList items={postItemsMinus}/>
                {button ? <AddForm items={postItemsMinus} setItems={setPostItemsMinus}/> : null}
            </div>
            <div className='categories plus hide-content'>
                <button className='new-item-button' onClick={() => setButton(true)} >Добавить новую категорию</button>
                <ItemList items={postItemsPlus}/>
                {button ? <AddForm items={postItemsPlus} setItems={setPostItemsPlus}/> : null}
            </div>
        </div>
    );
}

export default FunctionCategories;