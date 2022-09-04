import React, { useState } from 'react';

const PostItem = ({items}) => {
    const classname = 'button btn-item btn-minus';

    const [data, setdata] = useState([
        {id: 1, name: items.name, total: ''}
    ]);

    
    const onClick = (e) => {
        // setActiveId(items.id);

        const newdata = {
            id: ++[...data].length,
            name: e.target.name
        }
        setdata([...data, newdata])
        items.status = !items.status;
            
        
    }
    return (
        <div className='item' key={items.id}>
            <button className={classname + (items.status ? ' active' : '')}
                    id={items.id} 
                    onClick={onClick} 
                    value={items.status}
                    name={items.name}>
                {items.name}
            </button>
        </div>
    );
};

export default PostItem;