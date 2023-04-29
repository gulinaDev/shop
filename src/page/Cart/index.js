import React from 'react';
import  {data} from "../../data/product";


const Cart = () => {
    return (
        <div id="cart">
			<div className="container">
				<div className="cart">
					<div className="cart--group">
						<h1 className="cart--group__text">Your cart</h1>
						<p className="cart--group__span">Not ready to checkout? Continue Shopping</p>
					</div>
					{data.filter(el =>{
							if (el.type === "Detective"){
								return el
							} else if (el.type === "Sci-Fi"){
								return el
							}else if (el.type === "For teenagers"){
								return el
							}else{
								return ""
							}
						}).map(el =>{
							return<div className="cart--title">
							<div className="cart--title__group">
								<img src={el.image} alt=""/>
								<div>
									<h1>{el.title}</h1>
									<a href="#">Remove</a>
								</div>
								<h5>by Charlie Mackesy</h5>
								<h4 >{el.quantity}</h4>
								<h3>{el.price}</h3>
								<hr className="hr"/>
							</div>
							</div>




						})
					}
				</div>
			</div>

        </div>
    );
};

export default Cart;