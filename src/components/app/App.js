import { useState } from 'react';
import Footer from '../footer/Footer';
import '../categories/categories.scss'
import './App.css';
import ItemList from '../ItemList/ItemList';
import AddForm from '../add-new-form/add-form';

const App = () => {

	const [postItemsMinus, setPostItemsMinus] = useState([
        {id: 1, name: 'продукты', status: false},
        {id: 2, name: 'телефон', status: false},
        {id: 3, name: 'транспорт', status: false},
        {id: 4, name: 'связь', status: false},
    ]);

    const [postItemsPlus, setPostItemsPlus] = useState([
        {id: 1, name: 'зарплата'},
        {id: 2, name: 'вклады'},
        {id: 3, name: 'инвестиции'},
    ]);

    const [button, setButton] = useState(false);

	return (
		<div className="App">
			<Footer itemsMinus={postItemsMinus} itemsPlus={postItemsPlus} setItemsMinus={setPostItemsMinus} setItemsPlus={setPostItemsPlus}/>
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
		</div>
	);

}

export default App;
