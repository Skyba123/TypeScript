import { Electronics } from '../types/Electronics';
import { Clothing } from '../types/Clothing';

export const electronics: Electronics[] = [
    { id: 1, name: "Телефон", price: 10000, category: 'electronics', warrantyPeriod: 24 },
    { id: 2, name: "Ноутбук", price: 25000, category: 'electronics', warrantyPeriod: 36 }
];

export const clothing: Clothing[] = [
    { id: 3, name: "Футболка", price: 500, category: 'clothing', size: 'L', material: 'cotton' }
];