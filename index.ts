import { electronics, clothing } from './src/data/products';
import { findProduct, filterByPrice } from './src/utils/productUtils';
import { addToCart, calculateTotal, CartItem } from './src/utils/cartUtils';
import { BaseProduct } from './src/types/BaseProduct';


const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);


const affordableElectronics = filterByPrice(electronics, 15000);
console.log("Товари до 15000:", affordableElectronics);


let cart: CartItem<BaseProduct>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[0], 2);
console.log("Кошик:", cart);

const total = calculateTotal(cart);
console.log("Загальна вартість:", total);