import React, {Component} from 'react';
import './Home.css';
import GiftList from './GiftList'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            gifts: []
        }
    }

    addGift = (e) => {
        e.preventDefault()

        let newGift = {
            id: Date.now(),
            name: this._inputName.value,
            source: this._inputPlace.value,
            price: this._inputPrice.value
        }

        console.log(newGift);

        this.setState((state) => {
            return ({
                gifts: state.gifts.concat(newGift)
            })
        })
        console.log(this.state.gifts);
        this._inputName.value = '';
        this._inputPlace.value = '';
        this._inputPrice.value = '';
    }

    removeGift = (giftId) => {

        this.setState(state => {
            return ({
                gifts: state.gifts.filter((pers) => {return(pers.id !== giftId)})
            })
        })
    }

    render() {
        return (
            <div className='box'>
                 <GiftList setgift = {this.state.gifts} removeGiftMethod = {this.removeGift}/>
    
                <form onSubmit={this.addGift}>
                    <input ref={(element) => {this._inputName = element;}} type='text' placeholder='Name' />
                    <input ref={(element) => {this._inputPlace = element;}} type='text' placeholder='Where'/>
                    <input ref={(element) => {this._inputPrice = element;}} type='text' placeholder='How much'/>
                    <br></br>
                    <button type='submit'>+</button>
                </form>
                
            </div>
        )
    }
}

export default Home;