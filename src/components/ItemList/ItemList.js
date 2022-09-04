import React from 'react';
import PostItem from '../PostItem/PostItem';

const ItemList = ({items}) => {
    return (        
        <div className='items'>
            {items.map((item) => <PostItem items={item} key={item.id}/>)}
        </div>
    );
};

export default ItemList;