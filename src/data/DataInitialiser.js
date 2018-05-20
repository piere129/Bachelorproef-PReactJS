import ROG from '../assets/images/asusRog.png';
import pavilion from '../assets/images/pavilion.png';
import macbook from '../assets/images/macbook.jpg';
import readyplayer from '../assets/images/ReadyPlayer.jpg';
import jurassic from '../assets/images/jurassicworld.jpg';
import mockingjay from '../assets/images/mockingjay.jpg';
import miele from '../assets/images/mielensSGP.jpg';
import siemens from '../assets/images/siemensDish.jpg';
import bosch from '../assets/images/boschFridge.jpg';
import exquisit from '../assets/images/exquisitFridge.jpg';
import pineapple from '../assets/images/ledPineapple.jpg';
import candy from '../assets/images/candyGrab.jpg';
import watermelon from '../assets/images/watermelon.jpg';
import farcry from '../assets/images/farcry5.jpg';
import darkest from '../assets/images/darkestDungeon.jpg';
import darksouls from '../assets/images/darksouls3.jpg';
import gta from '../assets/images/gta5.jpg';

export class Datainitialiser {

	products = [
		{
			name: 'ASUS ROG GL4200',
			price: 999.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'laptop',
			image: ROG
		},
		{
			name: 'HP Pavilion',
			price: 844.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'laptop',
			image: pavilion
		},
		{
			name: 'Apple Macbook',
			price: 1299.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'laptop',
			image: macbook
		},
		{
			name: 'Ready Player One',
			price: 23.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'movie',
			image: readyplayer
		},
		{
			name: 'Jurassic World 2',
			price: 21.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'movie',
			image: jurassic
		},
		{
			name: 'The Hunger Games',
			price: 15.89,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'movie',
			image: mockingjay
		},
		{
			name: 'Miele SGSP3 Vacuüm cleaner',
			price: 188.00,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'household',
			image: miele
		},
		{
			name: 'Siemens WMN Dishwasher',
			price: 449.00,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'household',
			image: siemens
		},
		{
			name: 'Bosch S6 KS Fridge',
			price: 684.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'household',
			image: bosch
		},
		{
			name: 'Exquisit KS Fridge',
			price: 599.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'household',
			image: exquisit
		},
		{
			name: 'LED pineapple lamp',
			price: 9.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'gadget',
			image: pineapple
		},
		{
			name: 'Candy grabber machine',
			price: 19.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'gadget',
			image: candy
		},
		{
			name: 'Inflatable Watermelon',
			price: 9.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'gadget',
			image: watermelon
		},
		{
			name: 'Far Cry 5',
			price: 69.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'game',
			image: farcry
		},
		{
			name: 'Darkest Dungeon',
			price: 19.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'game',
			image: darkest
		},
		{
			name: 'Dark Souls 3',
			price: 49.90,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'game',
			image: darksouls
		},
		{
			name: 'GTA V',
			price: 45.99,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'game',
			image: gta
		}
	]


    getProductsFiltered(category) {
        if (category !== 'game' && category !== 'movie' && category !== 'gadget' && category !== 'household' && category !== 'laptop' && category !== 'all') {
            throw new Error('category not found');
        }
        else {
            if (category === 'all') {
                return this.products;
            }
            console.log(this.products.filter(product => product.category === category));
            return this.products.filter(product => product.category === category);
        }
    }

}

