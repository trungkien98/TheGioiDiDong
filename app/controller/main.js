console.log("hello word");
function getEle(id) {
  return document.getElementById(id);
}
var service = new Service();

function fetchData() {
  service
    .getListProduct()
    .then(function (result) {
      console.log(result.data);
      renderTable(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
fetchData();
function renderTable(data) {
  var content = ``;
  data.forEach(function (product, index) {
    content += `
    <div class="card">
    <div class="img-container">
      <img
        class="product-img"
        src="${product.img}"
        alt=""
      />
    </div>
    <div class="details">
      <h4 class="product-name">${product.name}</h4>

      <p>Camera trước: ${product.frontCamera}</p>
      <p>Camera sau: ${product.backCamera}</p>
      <p>Màn hình: ${product.screen}</p>

      <span>${product.desc}</span> 
      <p class="product-price">Giá: ${product.price}</p>
    </div>
<<<<<<< HEAD
    
     
      <span class="btn-add ">
        <div class="d-flex justify-content-between">
         
            <div class="d-flex">
              <button class="btn-qty" onclick="qtyChange(this,'sub')"><i class="fas fa-chevron-left"></i></button>
              <p class="qty">1</p>
              <button class="btn-qty" onclick="qtyChange(this,'add')"><i class="fas fa-chevron-right"></i></button>
            </div>
             <button onclick="addItem(this)" class="add-btn btn btn-success">
            Add to cart <i class="fas fa-chevron-right"></i></button>
          </div
=======
    <div class="purchase d-flex">
      <p class="product-price">${product.price}</p>
      <span class="btn-add">
        <div>
          <button onclick="addItem(this)" class="add-btn" data-action="add-to-cart">
            Add <i class="fas fa-chevron-right"></i>
          </button></div
>>>>>>> 25aff14f046dea9ac02c240aa292f5fb23c77530
      ></span>
    </div>
  
</div>
          
          
      `;
  });

  getEle("main-cart").innerHTML = content;
}

function phoneChanged(obj) {
  var loaiDt = obj.value;
  console.log(loaiDt);
}

var cart = [];
<<<<<<< HEAD
=======
var total = 0;

const cartDom = document.querySelector(".sidenav");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');





>>>>>>> 25aff14f046dea9ac02c240aa292f5fb23c77530
