import React, {Component} from 'react'
import Cart from "../js/components/Cart";


class CartView extends Component {

    constructor(props) {
        super(props);
        this.state = {cart: []};
    }

    render() {
        return (
            <div>
                <Cart cart={this.state.cart}/>
            </div>
        )
    }
}

export default CartView
