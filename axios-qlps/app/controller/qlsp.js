var service = new Service();

function getEle(id) {
  return document.getElementById(id);
}

function fetchData() {
  service
    .getListProduct()
    .then(function (result) {
      renderHTML(result.data);
      console.log(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchData();

function renderHTML(data) {
  var content = ``;

  data.forEach(function (product, index) {
    content += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.frontCamera}</td>
            <td>${product.backCamera}</td>
            <td>${product.screen}</td>
            <td>${product.type}</td>
            <td>${product.price}</td>
            <td>
                <img class="w-50" src="${product.img}" />
            </td>
            <td>${product.desc}</td>
            <td>
              <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${
                product.id
              })">Edit</button>

              <button class="btn btn-danger" onclick="deleteProduct(${
                product.id
              })">Delete</button>
            </td>
        </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = content;
}

/**
 * Add Product
 */
function addProduct() {
  var name = getEle("name").value;
  var price = getEle("price").value;
  var img = getEle("img").value;
  var desc = getEle("desc").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var screen = getEle("screen").value;

  var product = new Product(
    name,
    frontCamera,
    backCamera,
    screen,
    price,
    img,
    desc,
    type
  );

  service
    .addProductApi(product)
    .then(function () {
      fetchData();

      //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteProduct(id) {
  service.deleteProductApi(id)
  .then(function () {
    //render list data
    fetchData();
  })
  .catch(function (error) {
    console.log(error);
  });
}