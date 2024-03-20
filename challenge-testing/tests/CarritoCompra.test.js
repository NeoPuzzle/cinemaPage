const {CarritoCompra} = require("../index");

const mockGetItems = jest.fn(() => {
    return [
        {name: "Producto 1", price: 15.90, quantity: 3},
        {name: "Producto 2", price: 25.90, quantity: 5},
        {name: "Producto 3", price: 18.90, quantity: 7},
    ]
})


describe("Carrito Compra", () => {
    const carrito = new CarritoCompra(mockGetItems);

    it("CarritoCompra deberia ser una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    });
    it("carrito deberia ser una instancia de la clase CarritoCompra", () => {
        expect(carrito instanceof CarritoCompra).toBe(true);
    });
    it("La funcion 'getItems' debe ejecutarse al menos una vez", () => {
        expect(mockGetItems).toHaveBeenCalled();
    });
    it("Al llamar a la funcion agregarAlCarrito debe aumentar la cantidad de productos", () => {
        carrito.agregarAlCarrito('Producto 4', 10, 3);
        expect(carrito.quantityProducts()).toBe(4);
    });
    it("La funcion calcularTotal suma los precios de los productos", () => {
        expect(carrito.calcularTotal()).toBe(339.50);
    });
    it("El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra", () => {})
});