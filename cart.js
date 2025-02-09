class Cart {
    constructor() {
        this._items = [];
    }

    addItem(product) {
        this._items.push(product);
    }

    removeItem(productId) {
        this._items = this._items.filter(item => item.id !== productId);
    }

    getItems() {
        return this._items;
    }

    getTotalPrice() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}

module.exports = Cart;