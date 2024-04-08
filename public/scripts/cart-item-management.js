const cartItemUpdateFormElements = document.querySelectorAll(
  '.cart-item-management'
);
const cartTotalPriceElement = document.querySelector('#cart-total-price');
const cartBadgeElements = document.querySelectorAll('.nav-items .badge');

async function updateCartItem(event) {
  event.preventDefault();

  const form = event.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const quantity = form.firstElementChild.value;

  let response;
  try {
    response = await fetch('/cart/items', {
      method: 'PATCH',
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
        _csrf: csrfToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
  const updatedCartData = responseData.updatedCartData;

  if (updatedCartData.updatedItemPrice === 0) {
    form.parentElement.parentElement.remove();
  } else {
    const cartItemTotalPriceElement =
      form.parentElement.querySelector('.cart-item-price');

    cartItemTotalPriceElement.textContent =
      updatedCartData.updatedItemPrice.toFixed(2);
  }
  cartTotalPriceElement.textContent = updatedCartData.newTotalPrice.toFixed(2);

  cartBadgeElements.forEach(
    (cartBadge) => (cartBadge.textContent = updatedCartData.newTotalQuantity)
  );
}

for (const formElement of cartItemUpdateFormElements) {
  formElement.addEventListener('submit', updateCartItem);
}
