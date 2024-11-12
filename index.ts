import { electronics, clothing, books } from './src/data/products';
import { findProduct, filterByPrice } from './src/utils/productUtils';
import { addToCart, calculateTotal, CartItem } from './src/utils/cartUtils';
import { BaseProduct } from './src/types/BaseProduct';

//запуск робити через термінал для взаємодії
import * as readline from 'readline';

//ініціалізація інтерфейсу для введення
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//кошик користувача
let cart: CartItem<BaseProduct>[] = [];

//функція для виведення меню та обробки вибору
function showMenu() {
    console.log("\n--- Меню ---");
    console.log("1. Пошук товару за ID");
    console.log("2. Фільтрація товарів за ціною");
    console.log("3. Додати товар до кошика");
    console.log("4. Обчислити загальну вартість кошика");
    console.log("5. Вийти");
    rl.question("Виберіть опцію: ", (option) => {
        handleMenuSelection(option);
    });
}

//функція для обробки вибору користувача
function handleMenuSelection(option: string) {
    switch (option) {
        case "1":
            rl.question("Введіть ID товару: ", (id) => {
                const productId = parseInt(id);
                const product = findProduct([...electronics, ...clothing, ...books], productId);
                console.log("Знайдений товар:", product || "Товар не знайдено");
                showMenu();
            });
            break;
        case "2":
            rl.question("Введіть максимальну ціну: ", (price) => {
                const maxPrice = parseFloat(price);
                const filteredProducts = filterByPrice([...electronics, ...clothing, ...books], maxPrice);
                console.log("Товари до вказаної ціни:", filteredProducts);
                showMenu();
            });
            break;
        case "3":
            rl.question("Введіть ID товару для додавання: ", (id) => {
                const productId = parseInt(id);
                const product = findProduct([...electronics, ...clothing, ...books], productId);
                if (product) {
                    rl.question("Введіть кількість: ", (quantity) => {
                        const qty = parseInt(quantity);
                        cart = addToCart(cart, product, qty);
                        console.log("Товар додано до кошика:", product);
                        showMenu();
                    });
                } else {
                    console.log("Товар не знайдено");
                    showMenu();
                }
            });
            break;
        case "4":
            const total = calculateTotal(cart);
            console.log("Загальна вартість кошика:", total);
            showMenu();
            break;
        case "5":
            console.log("Дякуємо за використання магазину!");
            rl.close();
            break;
        default:
            console.log("Невірний вибір. Спробуйте ще раз.");
            showMenu();
            break;
    }
}

console.log("Вітаємо в інтернет-магазині!");
showMenu();