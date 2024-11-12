import { Electronics } from '../types/Electronics';
import { Clothing } from '../types/Clothing';
import { Book } from '../types/Book';

export const electronics: Electronics[] = [
    { id: 1, name: "Телефон", price: 10000, category: 'electronics', warrantyPeriod: 24 },
    { id: 2, name: "Ноутбук", price: 25000, category: 'electronics', warrantyPeriod: 36 }
];

export const clothing: Clothing[] = [
    { id: 3, name: "Футболка", price: 500, category: 'clothing', size: 'L', material: 'cotton' }
];

export const books: Book[] = [
    { id: 4, name: "Кобзар", price: 300, category: 'book', author: 'Тарас Шевченко', pageCount: 500 },
    { id: 5, name: "Атака титанів", price: 200, category: 'book', author: 'Хадзіме Ісаяма', pageCount: 671 },
    { id: 6, name: "Гарри Поттер і філософський камінь", price: 170, category: 'book', author: 'Джоан Роулінг', pageCount: 352 }
];