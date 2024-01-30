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
    listTag.innerHTML = "";
    products.map(product => {
        listTag.innerHTML +=
            `<li id="product-${product.id}">
                <h3>${product.name}</h3>
                <p>Cantidad:${product.quantity}</p> 
                <button id="edit-button" onclick="displayForm('${product.id}')">Editar</button>
                <button class="delete-button" onclick="deleteProduct('${product.id}')">Eliminar</button>
            </li>`
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

async function displayForm(id) {

    document.getElementById(`product-${id}`).innerHTML= `
    <form action="" method="" id="modify-form">
    <label for="modify-name">Producto: </label><input id="modify-name" name="name" type="text">
    <label for="modify-quantity">Cantidad: </label><input id="modify-quantity" name="quantity" type="number" min="0">
    <button type="submit" onclick="modifyProduct('${id}')">Guardar</button>
    <button class="cancel-button">Cancelar</button>
</form>`

}

  async function modifyProduct(id) {
    const modifyProduct = document.getElementById("modify-form");

    const result = await fetch(`http://localhost:3000/products/${id}`,
        {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: `{
                "name": "${modifyProduct.elements[0].value}",
                "quantity": ${modifyProduct.elements[1].value} 
            }`
        });
    return result;
}


document.querySelector(".cancel-button").addEventListener(
    'click', () => listTag.innerHTML = ""
)

/* const editButton = document.getElementById('edit-button');

editButton.addEventListener('click', () => {
    const editForm = document.getElementById(modify-form);

    if(form.style.display === 'none') {
        form.style.display = 'block';
    }

    else{
        form.style.display = 'none'
    }
}) */