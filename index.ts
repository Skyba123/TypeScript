import { Article } from './src/models/Article';
import { Product } from './src/models/Product';
import { articleValidator } from './src/validators/ArticleValidator';
import { productValidator } from './src/validators/ProductValidator';
import { runValidators } from './src/utils/CompositeValidator';
import { ContentOperations } from './src/services/ContentOperations';
import { AccessControl } from './src/services/AccessControl';

const article: Article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'Sample Article',
    content: 'This is a sample article.',
    authorId: 'author123',
    tags: ['typescript', 'cms'],
  };
  
  // Валідатор для статті
  const articleValidationResult = runValidators([articleValidator], article);
  console.log('Article Validation:', articleValidationResult);
  if (!articleValidationResult.isValid) {
    console.error('Article validation failed:', articleValidationResult.errors);
  } else {
    console.log('Article is valid:', article);
  }
  
  // Операції зі статтями
  const articleOperations: ContentOperations<Article> = {
    create: (content) => {
      console.log('Creating article:', content);
      return content;
    },
    read: (id) => {
      console.log('Reading article with id:', id);
      return id === article.id ? article : null;
    },
    update: (id, updates) => {
      console.log('Updating article with id:', id, 'updates:', updates);
      return id === article.id ? { ...article, ...updates } : null;
    },
    delete: (id) => {
      console.log('Deleting article with id:', id);
      return id === article.id;
    },
    list: (filters) => {
      console.log('Listing articles with filters:', filters);
      return [article]; // Повертаємо статтю для прикладу
    },
  };
  

  const newArticle = articleOperations.create(article);
  const readArticle = articleOperations.read('1');
  const updatedArticle = articleOperations.update('1', { status: 'published' });
  articleOperations.delete('2');
  

  const product: Product = {
    id: '101',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    name: 'Sample Product',
    description: 'A sample product for testing.',
    price: 100,
    stock: 50,
    category: 'Electronics',
  };
  
  // Валідатор для продукту
  const productValidationResult = runValidators([productValidator], product);
  if (!productValidationResult.isValid) {
    console.error('Product validation failed:', productValidationResult.errors);
  } else {
    console.log('Product is valid:', product);
  }
  
  // Правила доступу для статей
  const articleAccessControl: AccessControl<Article> = {
    admin: {
      create: true,
      read: true,
      update: true,
      delete: true,
      list: true,
    },
    editor: {
      create: true,
      read: true,
      update: true,
      delete: false,
      list: true,
    },
    viewer: {
      create: false,
      read: true,
      update: false,
      delete: false,
      list: true,
    },
  };
  
  // Перевірка доступу
  const role: keyof typeof articleAccessControl = 'editor';
  const canCreate = articleAccessControl[role]?.create;
  if (canCreate) {
    console.log(`${role} can create articles.`);
  } else {
    console.log(`${role} cannot create articles.`);
  }