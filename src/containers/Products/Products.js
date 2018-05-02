import {h, Component} from 'preact';
import {Link} from 'react-router-dom';
import './Products.css';

export class Products extends Component {
	render() {

		return (

			<div>
				<meta name="viewport" content="width=device-width" />
				{
					this.props.items.map(item => {

						return (
							<Link to={'/projects/' + item.name} key={item.name}>
								<figure className="snip1418">
									<img src={item.image} />
									<div className="add-to-cart">
										<i className="ion-android-add"></i>
										<span>Add to Cart</span>
									</div>
									<figcaption>
										<h3>{item.name}</h3>
										<p>{item.description}</p>
										<div className="price">
											{item.price + '$'}
										</div>
									</figcaption>
								</figure>
							</Link>

						);
					})
				}
			</div>
		);
	}
}

export default Products;
