import React from 'react';

const Cart = () => {
    return (
        <div>
        	<section id="add">
			<div class="container">
				<div class="add">
					<div class="add--img">
						<img src="./img/image-2.png" alt="img" />
					</div>
                    <h1>gvjvjhgjvjgh</h1>

					<div class="add--boy">
						<div class="add--boy__like">
							<h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
							<ion-icon name="heart-outline"></ion-icon>
							<ion-icon name="share-social-outline"></ion-icon>
						</div>
						<h4>by Charlie Mackesy</h4>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h3>
						<h2>$99</h2>
						<div class="add--boy__btn">
							<button class="add--boy__btn1">Add to Cart</button>
							<button class="add--boy__btn2">
								-
								<h1>1</h1>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    );
};

export default Cart;