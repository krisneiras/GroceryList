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
    console.log(result);
    products.map(product => {
        listTag.innerHTML +=
        `<h3>${product.name}</h3>`
    })

    return products
}

//POST

//DELETE

//PUT