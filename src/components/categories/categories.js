import React from 'react';
import './categories.scss';
import {itemsMinus, itemsPlus} from '../shared/dataArrays'
import AddNewForm from '../add-new-form/add-new-form';
import AddForm from '../add-new-form/add-form';
import PostItem from '../PostItem/PostItem';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        // this.maxID = 3;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            showComponent: true,
            display: 'none'
        }); 
    }
    
    render() {        
        const style = {display: this.state.display};
        const postItemsMinus = itemsMinus.map((item) => {
                    
            return (    
                <div key={item.id} className='item'>
                    <button className='button btn-item btn-minus'>{item.name}</button>
                </div>
            )            
        })
    
        const postItemsPlus = itemsPlus.map((item) => {
            return (
                <PostItem name={item.name} key= {item.id}/>
            )
        })
    
        return (            
            <div className='container'>
                <div className='categories minus hide-content'>
                    <button className='new-item-button' onClick={this.handleClick} style={style}>Добавить новую категорию</button>
                    {this.state.showComponent ? <AddForm/> : postItemsMinus}
                </div>
                <div className='categories plus hide-content'>
                    {postItemsPlus}
                </div>
            </div>
        );
    }
}

export default Categories;