let listTag = document.getElementById("list");

// READ - GET
/* async function getList() {
    const result = await ("http://localhost:3000/products");
    const data = await result.json();
    return data;
}*/

// PRINT
async function viewList() {
    const result = await fetch("http://localhost:3000/products");
    const products = await result.json();
    products.map(product => {
        listTag.innerHTML +=
            `<h3>${product.name}</h3> 
            <button>Editar</button>
            <button class="delete-button" onclick="deleteProduct('${product.id}')">Eliminar</button>`
    })
    return products;
}

//DELETE
async function deleteProduct(id) {
    const result = await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
    return result;
}

//CREATE - POST
async function addProduct() {
    const newProduct = document.getElementById("product-form");

    const result = await fetch(`http://localhost:3000/products/`,
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: `{
                "name": "${newProduct.elements[0].value}",
                "quantity": ${newProduct.elements[1].value} 
            }`
        });
    return result;
}

//PUT