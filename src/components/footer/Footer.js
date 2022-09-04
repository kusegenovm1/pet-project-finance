import { useState } from 'react';
import Finance from '../../services/services';
import FormScore from './FormScore';
import './footer.css'
import AllElements from '../categories/AllElements';

const Footer = ({itemsMinus, itemsPlus, setItemsMinus, setItemsPlus}) => {

    const finance = new Finance();

    const toggleShowMinus = () => {
        finance.getActiveClassMinus();
    }
        
    const toggleShowPlus = () => {
        finance.getActiveClassPlus();
    }

    let [scoreBase, setScoreBase] = useState(5000);
    const [nameValue, setNameValue] = useState('');    

    const [arr, setArr] = useState([]);
    const [arrPlus, setArrPlus] = useState([]);
    
    const handleMinus = (event) => {
        event.preventDefault();
        let AllItems = itemsMinus.find(item => item.status === true);
        const newElements = {
            id: ++[...arr].length,
            name: AllItems.name,
            total: nameValue,
        }
        
        setArr([...arr, newElements]);
        setScoreBase(scoreBase - nameValue);
        setNameValue('');
        document.querySelector('.all-elements').style.display = 'flex';
        document.querySelector('.all-elements').style.justifyContent = 'center';
        setItemsMinus(itemsMinus.filter(item => {
            item.status = false;
            return item;
        }) );
    }

    const handlePlus = (event) => {
        event.preventDefault();
        let AllItems = itemsPlus.find(item => item.status === true);
        const newElements = {
            id: ++[...arr].length,
            name: AllItems.name,
            total: nameValue,
        }
        setArrPlus([...arrPlus, newElements]);
        setScoreBase(scoreBase + Number(nameValue));
        setNameValue('');
        document.querySelector('.all-elements').style.display = 'flex';
        document.querySelector('.all-elements').style.justifyContent = 'space-around';
        setItemsPlus(itemsPlus.filter(item => {
            item.status = false;
            return item;
        }) );
    }
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        
    }
    return (
            <div className='header'>
                <div className="score-info">
                    <h2>Счет:</h2><h2 className="input" value={scoreBase}>{scoreBase}</h2>
                </div>
                <div className="buttons">
                    <button className='button btn-outline-primary' onClick={toggleShowMinus} value={'-'}>-</button>                
                    <button className='button btn-outline-primary' onClick={toggleShowPlus} value={'+'}>+</button>
                </div>
                <FormScore nameValue={nameValue} setNameValue={setNameValue} handleMinus={handleMinus} handlePlus={handlePlus}/>                
                <hr />
                <AllElements itemsMinus={arr} itemsPlus={arrPlus} style={style}/>
            </div>
    );
}

export default Footer;