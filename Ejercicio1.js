var tienda = [];
var ventas = [];


function Add(cod,descrip,tipo,precioC,precioVent,stock){

    var producto = new Object();

    producto.codigo = cod,
    producto.descripcion = descrip,
    producto.tipoProducto = tipo,
    prodcuto.precioCompra = precioC,
    producto.precioVenta = precioVent,
    producto.stock = stock

    tienda.push(producto);
}

function modStock(cod,newStock){
    for(let i=0;i<producto.length;i++){
        if(producto.codigo[i] == cod){
            producto.stock = newStock;
            return;
        }else{
            console.log('Codigo no valido');
        }
    }
}


function registrarVentas(cod,venta){
    for(let i=0;i<producto.length;i++){
        if(producto.codigo[i] == cod){
            venta.push(producto.precioVenta*venta);
            producto.stock = producto.stock-venta;
    }
}
}

function promedio(){
    var prom;
    for(let i=0;i<ventas.length;i++){
        prom = prom + ventas[i];
    }
    console.log('El promedio de las ventas es de: ',prom);
}

function stock_0(){
    for(let elements of productos){
        if(elements.stock==0) console.log(elements);
    }
}

function opcionesMenu(){
    var salir = true;
    while(salir){
        console.log('1. Agregar Producto');
        console.log('2. Modificar Stock');
        console.log('3. Registrar Venta y Reducir Stock');
        console.log('4. Promedio de ventas realizadas');
        console.log('5. Mostrar productos con Stock 0');
        console.log('6. Salir');

        var opcion = parseInt(prompt('Ingrese una opcion'));
        switch(opcion){
            case 1:
                var cod = prompt("Codigo del producto", "");
                var descrip = prompt("Descripcion", "");
                var tipo = prompt("Tipo de producto", "");
                var precioC = prompt("Precio de compra", "");
                var precioVent = prompt("Precio de venta", "");
                var stock = prompt("Stock", "");
                Add(cod,descrip,tipo,precioC,precioVent,stock);
                break;

            case 2:
                var cod = prompt("Ingrese el codigo");
                var newStock = prompt("Ingrese la cantidad nueva en stock");
                modStock(cod,newStock);
                break;
            case 3:
                var cod = prompt("Ingrese el codigo");
                var venta = prompt("Ingrese el producto vendido");
                registrarVentas(cod,venta)
                break;
            case 4:
                promedio();
                break
            case 5:
                stock_0();
                break;
            case 6:
                salir = false;
                break;
            default:
                console.log('Ingrese una opcion del menu');

        }
    }
}