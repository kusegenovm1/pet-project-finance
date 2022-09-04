import React from 'react';
import Element from './Element';

const AllElements = ({itemsMinus, itemsPlus}) => {
    return (
        <div className="all-elements">
            <div className="list-minus">
                <table className='table'>
                    <caption><h2>Список расходов </h2></caption>
                    {itemsMinus.map((item) => <Element array={item} key={item.id}/>)}
                </table>
            </div>
            <div className="list-plus">
                <table className='table'>
                    <caption><h2>Список доходов </h2></caption>
                    {itemsPlus.map((item) => <Element array={item} key={item.id}/>)}
                </table>
            </div>
        </div>
    );
};

export default AllElements;