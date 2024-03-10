const {CarritoCompra} = require("../index");

const mockGetItems = jest.fn(() => {
    return [
        {name: "Producto 1", price: 15.90, quantity: 3},
        {name: "Producto 2", price: 25.90, quantity: 5},
        {name: "Producto 3", price: 18.90, quantity: 7},
    ]
})


describe("Carrito Compra", () => {
    it("La funcion 'getItems' debe ejecutarse al menos una vez", () => {
        const carrito = new CarritoCompra(mockGetItems);
        carrito.getItems();
        expect(mockGetItems).toHaveBeenCalled();
    });
    it("Al llamar a la funcion agregarAlCarrito debe aumentar la cantidad de productos", () => {});
    it("Al llamar a la funcion eliminarDelCarrito debe reducir la cantidad de productos", () => {});
})