import React from 'react';

const FormScore = ({nameValue, setNameValue, handleMinus, handlePlus}) => {
    return (
        <>
            <form className='score-form minus'>
                <input 
                    type="number" 
                    className='input input-one' 
                    placeholder='0' 
                    onChange={e => setNameValue(e.target.value)}                     
                    value={nameValue}/>
                <input 
                    className='btn-primary btn-submit' 
                    type="button" value='Сохранить' 
                    onClick={handleMinus} />
            </form>
            <form className='score-form plus'>
                <input 
                    type="number"
                    className='input input-one' 
                    placeholder='0' 
                    onChange={e => setNameValue(e.target.value)} 
                    value={nameValue} />
                <input 
                    type="button" 
                    className='btn-primary btn-submit' 
                    value='Сохранить' 
                    onClick={handlePlus}/>
            </form>
        </>
    );
};

export default FormScore;