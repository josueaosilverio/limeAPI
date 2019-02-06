import React, {Component} from 'react'
import CartC from "../js/components/Cart";


class CartView extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CartC/>
            </div>
        )
    }
}

export default CartView
