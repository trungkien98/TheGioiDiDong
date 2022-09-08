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
    </div>
    <div class="purchase d-flex">
      <p class="product-price">${product.price}</p>
      <span class="btn-add">
        <div>
          <button onclick="addItem(this)" class="add-btn">
            Add <i class="fas fa-chevron-right"></i>
          </button></div
      ></span>
    </div>
  </div>
</div>
          
          
      `;
  });

  getEle("main-cart").innerHTML = content;
}

function phoneChanged(obj) {
  var loaiDt = document.getElementById('typePhone').value;
  console.log(loaiDt);
}

phoneChanged()