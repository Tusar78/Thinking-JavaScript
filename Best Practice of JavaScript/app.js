// Variable Naming Rules;

// Variable name should be meaningful

// Method chaining
class Product {
  constructor (name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setUnit(unit) {
    this.unit = unit;
    return this;
  }

  save() {
    console.log(this.name, this.price, this.unit);
  }
}

const newProduct = new Product('T-Shirt').setPrice(6000).setUnit(2);
newProduct.save();
(function myFunc() {
  console.log('Tusar');
})()