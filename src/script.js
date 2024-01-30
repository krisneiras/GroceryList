const listTag = document.getElementById("list");
const formTag = document.getElementById("form");
document.querySelector(".cancel-button").addEventListener(
    'click', () => false
)

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
    formTag.innerHTML = "";
    products.map(product => {
        listTag.innerHTML +=
            `<article>
                <h3><label>${product.name}<input type="checkbox"></label></h3>
                <p>Cantidad: ${product.quantity}</p> 
                <button id="edit-button" onclick="displayForm('${product.id}', '${product.name}', ${product.quantity})">Editar</button>
                <button class="delete-button" onclick="deleteProduct('${product.id}')">Eliminar</button>
            </article>`
    })    
    return products;
}

// CREATE - POST
function addForm(){
    formTag.innerHTML =
    `<form action="" method="" id="add-form">
        <p><label for="add-name">Producto: </label><input id="add-name" name="name" type="text" value=""></h3></p>
        <p><label for="add-quantity">Cantidad: </label><input id="add-quantity" name="quantity" type="number" value="" min="0"></p>
        <button type="submit" onclick="addProduct()">Añadir</button>
        <button class="cancel-button">Cancelar</button>
    </form>`
}

async function addProduct() {
    const newProduct = document.getElementById("add-form");

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

// UPDATE - PUT
async function displayForm(id, name, quantity) {
    formTag.innerHTML= `
    <h3>Editando...</h3>
    <form action="" method="" id="modify-form">
        <p><label for="add-name">Producto: </label><input id="modify-name" name="name" type="text" value="${name}"></p>
        <p><label for="modify-quantity">Cantidad: </label><input id="modify-quantity" name="quantity" type="number" value="${quantity}" min="0"></p>
        <button type="submit" onclick="modifyProduct('${id}')">Guardar</button>
        <button class="cancel-button">Cancelar</button>
    </form>`;
    listTag.innerHTML= "";
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

//DELETE
async function deleteProduct(id) {
    if(confirm("¿Estás seguro que quieres eliminar este producto?") === true){
        const result = await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        return result;
    }
}

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