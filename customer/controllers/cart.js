var api = new CallApi();
var crt = new Cart();

function getEle(id) {
  return document.getElementById(id);
}
crt.cart = JSON.parse(localStorage.getItem("data")) || [];
console.log(crt.cart);
function calcCartQuantity() {
  var domQtyCart = getEle("product-count");
  domQtyCart.innerHTML = crt.cart
    .map((item) => item.quantity)
    .reduce((x, y) => x + y, 0);
}

function getListProducts() {
  var promise = api.fetchData();
  promise
    .then(function (result) {
      console.log(result.data);
      renderUI(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

calcCartQuantity();
getListProducts();

function renderUI(data) {
  var content = "";
  if (crt.cart.length <= 0) {
    return;
  } else {
    content += crt.cart
      .map((item) => {
        let { id, quantity } = item;
        let search = data.find((x) => parseInt(x.id) === id) || [];
        return `
        <tr class="cart_item">
            <td class="product-remove">
              <a title="Remove this item" class="remove" href="#"
                >×</a
              >
            </td>
    
            <td class="product-thumbnail">
              <a href="single-product.html"
                ><img
                  width="145"
                  height="145"
                  alt="poster_1_up"
                  class="shop_thumbnail"
                  src="../assets/img/${search.img}"
              /></a>
            </td>
    
            <td class="product-name">
              <a href="single-product.html">${search.name}</a>
            </td>
    
            <td class="product-price">
              <span class="amount">£${search.price}</span>
            </td>
    
            <td class="product-quantity">
              <div class="quantity buttons_added">
                <input
                  onclick="handleMinus(${id})"
                  type="button"
                  class="minus"
                  value="-"
                />
                <input
                  id=${id}
                  type="number"
                  size="4"
                  class="input-text qty text"
                  title="Qty"
                  value="${quantity}"
                  min="0"
                  step="1"
                />
                <input
                  onclick="handlePlus(${id})"
                  type="button"
                  class="plus"
                  value="+"
                />
              </div>
            </td>
    
            <td class="product-subtotal">
              <span class="amount">£${search.price}</span>
            </td>
        </tr>
        `;
      })
      .join("");
    getEle("tbody").innerHTML = content;
  }
}

function handleMinus(id) {
  let search = crt.cart.find((item) => item.id === id);
  if (search.quantity === 0) {
    return;
  } else {
    search.quantity -= 1;
  }
  updateQuantity(search.id);
  crt.cart = crt.cart.filter((item) => item.quantity !== 0);
  getListProducts();
  localStorage.setItem("data", JSON.stringify(crt.cart));
}
function handlePlus(id) {
  let search = crt.cart.find((item) => item.id === id);
  if (!search) {
    return;
  } else {
    search.quantity += 1;
  }
  updateQuantity(search.id);

  crt.cart = crt.cart.filter((item) => item.quantity !== 0);
  localStorage.setItem("data", JSON.stringify(crt.cart));
}

function updateQuantity(id) {
  let search = crt.cart.find((item) => item.id === id);
  getEle(id).value = search.quantity;
  calcCartQuantity();
}
