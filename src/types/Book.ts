import { BaseProduct } from './BaseProduct';

export type Book = BaseProduct & {
    category: 'book';
    author: string;
    pageCount: number;
};