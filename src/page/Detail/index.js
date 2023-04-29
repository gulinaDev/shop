import React from 'react';

const Detail = () => {
    return (
        <div id='cart'>
            <div className="cart">
                <div>
                    <div className="cart--text">
                        <h1>Your cart</h1>
                        <h5>Not ready to checkout? <a href="#">Continue Shopping</a></h5>
                    </div>
                    <div>
                        <div className="cart--block__boy">
                            <img src="./img/boy.png" alt="img"/>
                            <div className="cart--block__boy--text">
                                <div className="cart--block__boy--text__remove">
                                    <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                    <a href="#">Remove</a>
                                </div>
                                <h5>by Charlie Mackesy</h5>
                                <h4>Quantity: 1</h4>
                                <h3>$99</h3>
                            </div>
                        </div>
                        <hr className="hr"/>
                    </div>

                    <div>
                        <div className="cart--block__boy">
                            <img src="./img/subtle.png" alt="img"/>
                            <div className="cart--block__boy--text">
                                <div className="cart--block__boy--text__remove">
                                    <h1>THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                                    <a href="#">Remove</a>
                                </div>
                                <h5>by Mark Manson</h5>
                                <h4>Quantity: 1</h4>
                                <h3>$99</h3>
                            </div>
                        </div>
                        <hr className="hr"/>
                    </div>

                    <div>
                        <div className="cart--block__boy">
                            <img src="./img/harry.png" alt="img"/>
                            <div className="cart--block__boy--text">
                                <div className="cart--block__boy--text__remove">
                                    <h1>HARRY POTTER</h1>
                                    <a href="#">Remove</a>
                                </div>
                                <h5>by J.K. Rowling</h5>
                                <h4>Quantity: 1</h4>
                                <h3>$99</h3>
                            </div>
                        </div>
                        <hr className="hr"/>
                    </div>
                </div>
                <div className="cart--order">
                    <h1>Order Summary</h1>
                    <div className="cart--order__flex">
                        <div className="cart--order__flex--text">
                            <h4>Shipping</h4>
                            <h3>Select Method
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </h3>
                        </div>
                        <div className="cart--order__flex--text">
                            <h4>Shipping</h4>
                            <h3>Select Method
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="cart--order__total">
                        <h3>Total</h3>
                        <h2>$188</h2>
                    </div>
                    <button>Continue to checkout</button>
                </div>
            </div>









        </div>
    );
};

export default Detail;