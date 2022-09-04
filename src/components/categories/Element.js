import React from 'react';

const Element = ({array}) => {
    return (
        <>            
            <tr key={array.id}>
                <td value={array.name}>{array.name}</td><td value={array.total}>{array.total}</td>
            </tr>
        </>
    );
};

export default Element;