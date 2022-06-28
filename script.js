
// Teniendo en cuenta que como proyecto tengo pensado hacer una tienda de Funko Pop, estableci la siguiente clase y los arrays

class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
}
    aumentarStock(ingreso = 1){
        this.stock = this.stock + ingreso
    }
    disminuirStock(egreso = 1){
        this.stock = this.stock - egreso
    }
    aumentoPrecio(porcentaje = 1){
        this.precio = precio * porcentaje
        // this.precio *= porcentaje
    }

}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 1)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )

const ProductosLotr = [producto1, producto2, producto3]
const ProductosSw = [producto4, producto5, producto6]

console.log(ProductosLotr)
console.log(ProductosSw)

const AllProductos = ProductosLotr.concat(ProductosSw)

console.log (AllProductos)