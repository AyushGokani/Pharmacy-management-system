const Product = require('./product');

class Medicine extends Product {
    constructor(id, name, price, description, dosage, sideEffects) {
        super(id, name, price, description);
        this._dosage = dosage;
        this._sideEffects = sideEffects;
    }

    get dosage() { return this._dosage; }
    get sideEffects() { return this._sideEffects; }

    displayInfo() {
        return `${super.displayInfo()} - Dosage: ${this.dosage}`;
    }
}

module.exports = Medicine;