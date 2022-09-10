var service = new Service();

function getEle(id) {
  return document.getElementById(id);
}
var arr = [];
function fetchData() {
  service
    .getListProduct()
    .then(function (result) {
      renderHTML(result.data);
      arr = result.data;
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
              <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editProduct(${
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
var valid = new Validation();
/**
 * Add Product
 */
function addProduct() {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm mới";

  var name = getEle("name").value;
  var price = getEle("price").value;
  var img = getEle("img").value;
  var desc = getEle("desc").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var screen = getEle("screen").value;
  var type = getEle("type").value;
  var isValid = true;
  //valid tai khoan
  isValid &= valid.kiemTraRong(name, "tbName", "(*)Vui lòng không để trống");
  //valid gia
  isValid &=
    valid.kiemTraRong(price, "tbPrice", "(*)Vui lòng không để trống") &&
    valid.kiemTraSo(price, "tbPrice", "(*)Vui lòng nhập đúng định dạng");
  //valid img
  isValid &=
    valid.kiemTraRong(img, "tbImg", "(*)Vui lòng không để trống") &&
    valid.kiemTraLink(img, "tbImg", "(*)Vui lòng nhập đúng định dạng");
  //valid desc
  isValid &= valid.kiemTraRong(desc, "tbDesc", "(*)Vui lòng không để trống");
  //valid scr
  isValid &= valid.kiemTraRong(
    screen,
    "tbScreen",
    "(*)Vui lòng không để trống"
  );
  //valid frontcam
  isValid &= valid.kiemTraRong(
    frontCamera,
    "tbFrontCam",
    "(*)Vui lòng không để trống"
  );
  //valid backCam
  isValid &= valid.kiemTraRong(
    backCamera,
    "tbBackCam",
    "(*)Vui lòng không để trống"
  );
  //valid type
  isValid &= valid.checkOptionType("type", "tbType", "Vui lòng chọn loại dt");

  if (!isValid) return null;
  var product = new Product(
    "",
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
//delete sản phẩm
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//edit sản phẩm
function editProduct(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Update SP";
  var btnUpdate = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;
  service
    .getProductById(id)
    .then(function (result) {
      //show thông ra các thẻ input
      getEle("name").value = result.data.name;
      getEle("screen").value = result.data.screen;
      getEle("frontCam").value = result.data.frontCamera;
      getEle("backCam").value = result.data.backCamera;
      getEle("type").value = result.data.type;
      getEle("price").value = result.data.price;
      getEle("img").value = result.data.img;
      getEle("desc").value = result.data.desc;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function updateProduct(id) {
  var name = getEle("name").value;
  var price = getEle("price").value;
  var img = getEle("img").value;
  var desc = getEle("desc").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var screen = getEle("screen").value;
  var type = getEle("type").value;

  var product = new Product(
    id,
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
    .updateToList(product)
    .then(function () {
      fetchData();
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
/**
 * Tim kiem san pham
 */
getEle("search").onchange = () => {
  var filter = getEle("search").value;
  if (getEle("search").selectedIndex !== 0) {
    var arrKey = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type == filter) {
        arrKey.push(arr[i]);
      }
    }
    renderHTML(arrKey);
  } else {
    renderHTML(arr);
  }
};
