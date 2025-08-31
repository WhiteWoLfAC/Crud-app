let productName = document.getElementById("Name");
let productPrice = document.getElementById("Price");
let productCategory = document.getElementById("category");
let productModel = document.getElementById("model");

let productlist = [];
if (localStorage.getItem("productlist") != null) {
    productlist = JSON.parse(localStorage.getItem("productlist"));
}
displayProducts();

function addproduct() {
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        model: productModel.value,
    };
    console.log(product);
    productlist.push(product);
    console.log(productlist);

    clearInputs();

    displayProducts();
    localStorage.setItem("productlist", JSON.stringify(productlist));
}
function displayProducts() {
    let table = "";
    for (let i = 0; i < productlist.length; i++) {

        table += `    <tr>
      <th scope="row">${i + 1}</th>
      <td>${productlist[i].name}</td>
      <td>${productlist[i].price}</td>
      <td>${productlist[i].category}</td>
      <td>${productlist[i].model}</td>
      <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
      <td><button class="btn btn-danger" onclick="updateProduct(${i})">Update</button></td>
      </tr>`
    }
    document.getElementById("ProductTable").innerHTML = table;
}


function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productModel.value = "";
}

function deleteProduct(index) {
    productlist.splice(index, 1);
    localStorage.setItem("productlist", JSON.stringify(productlist));
    displayProducts();
}
let crudProductList = [];
function updateProduct(index) {
    let overlay = document.querySelector(".updateform");
    overlay.style.display = "flex";

    let updateName = document.getElementById("updateName");
    let updatePrice = document.getElementById("updatePrice");
    let updateCategory = document.getElementById("updateCategory");
    let updateModel = document.getElementById("updateModel");

    crudProductList = JSON.parse(localStorage.getItem("productlist"));
    updateName.value = crudProductList[index].name;
    updatePrice.value = crudProductList[index].price;
    updateCategory.value = crudProductList[index].category;
    updateModel.value = crudProductList[index].model;
    crudProductList.splice(index, 1);

}
function updateproductinfo() {
    let product = {
        name: updateName.value,
        price: updatePrice.value,
        category: updateCategory.value,
        model: updateModel.value,
    };

crudProductList.push(product);

clearupdateInputs();

localStorage.setItem("productlist", JSON.stringify(crudProductList));

productlist = JSON.parse(localStorage.getItem("productlist"));
displayProducts();

 let overlay = document.querySelector(".updateform");
    overlay.style.display = "none";
};


function clearupdateInputs() {
    updateName.value = "";
    updatePrice.value = "";
    updateCategory.value = "";
    updateModel.value = "";
}

function closeUpdateForm() {
    let overlay = document.querySelector(".updateform");
    overlay.style.display = "none";
}