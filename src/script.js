let listTag = document.getElementById("list");

// READ
async function viewList() {
    const result = await ("http://localhost:3000/products");
    const data = await result.json();
    return data;
}

//POST

//DELETE

//PUT