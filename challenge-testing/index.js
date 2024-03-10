const { getItems } = require("./database")

class CarritoCompra {
    constructor(){
        this.items = getItems();
    }

    agregarAlCarrito(name, price, quantity){
        this.items.push({name, price, quantity});
    }
}

module.exports = {CarritoCompra};