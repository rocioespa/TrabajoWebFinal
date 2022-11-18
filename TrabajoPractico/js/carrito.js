function armarCarrito() {
    const productos = JSON.parse(localStorage.getItem('productos'));
    const productosStack = [];
    productos.forEach((producto) => {
        const productoStack = productosStack.find((p) => p.id === producto.id);
        if (productoStack) {
            productoStack.cantidad ++;
        } else {
            productosStack.push(producto);
        }
    });

    const tabla = document.getElementById("tabla");
    tabla.innerHTML = 
        `<tr>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th>SUBTOTAL</th>
          <th class="empty"></th>
        </tr>`

    for(prod in productosStack) {

        tabla.innerHTML += 
        `<tr>
            <td class="img-carrito">
            <img src="`+ productosStack[prod].src +`" alt="" />
            </td>
            <td>`+ productosStack[prod].cantidad +`</td>
            <td>`+ productosStack[prod].precio +`</td>
            <td>`+ productosStack[prod].precio * productosStack[prod].cantidad  +`</td>
            <td class="edit-buttons">
            <i class="fa-solid fa-trash-can" id="`+ productosStack[prod].id +`"></i>
            </td>
        </tr>`
    }
    calcularTotales(productosStack);
}

addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-can")) {
        productosFiltrados = [];
        const productos = JSON.parse(localStorage.getItem('productos'));
        productosFiltrados = [];
        console.log("productos")
        console.log(productos);
        for (prod in productos) {
            if ( productos[prod].id !== parseInt(e.target.id, 10) ) {
                productosFiltrados.push(productos[prod]);
            }
        }
        console.log("productos filtrados")
        console.log(productosFiltrados)
        localStorage.setItem('productos', JSON.stringify(productosFiltrados));
        armarCarrito();
    }
});


function calcularTotales (productos){
    document.getElementById("total").innerHTML = "Total: $ ";
    let total = 0;
    for (prod in productos) {
        total += productos[prod].precio * productos[prod].cantidad;
    }
    document.getElementById("total").innerHTML += total;
}

armarCarrito();


