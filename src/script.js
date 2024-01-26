let listTag = document.getElementById("list");

// READ
/* async function getList() {
    const result = await ("http://localhost:3000/products");
    const data = await result.json();
    return data;
}
 */
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

//POST


async function addProduct() {
    /*const newProduct = document.getElementById("product-form");
    console.log(newProduct.elements[0].value);*/

    const result = await fetch(`http://localhost:3000/products/`,
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: `{
                "name": "Leche",
                "quantity": 1 
            }`
        });
    return result;
}

//PUT