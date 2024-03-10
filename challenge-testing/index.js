const { getItems } = require("./database")

class CarritoCompra {
    constructor(getItems){
        this.items = getItems();
    }

    agregarAlCarrito(name, price, quantity){
        this.items.push({name, price, quantity});
    }

    quantityProducts() {
        return this.items.length;
    }

    calcularTotal(){
        let total = 0;
        for (const item of this.items) {
            total  += item.quantity * item.price;
        }

     return total;
    }
}

module.exports = {CarritoCompra};