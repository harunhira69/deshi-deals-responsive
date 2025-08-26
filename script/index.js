function getElement(id){
    const element = document.getElementById(id)
    return element;
}
const cartBtns = document.getElementsByClassName('cart-btn');
for(let cartButton of cartBtns){
  cartButton.addEventListener('click',function(){
   const productImg =cartButton.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
   const productTitle = cartButton.parentNode.parentNode.children[0].innerText
  //  console.log(productTitle)

   const productPrice = cartButton.parentNode.parentNode.children[3].children[0].innerText
   const totalPrice = getElement("total-price").innerText;

   const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;
    const cartConatiner = getElement('card-container');
const newCart = document.createElement('div');
newCart.innerHTML =` <div class=" flex justify-between rounded-xl p-4 items-center bg-slate-400">
                     <img src="${productImg}" class="w-10" alt="">
                     <div>
                        <h2 class="font-bold">${productTitle}</h2>
                        <h2>${productPrice}tk</h2>
                     </div>
                    </div>`
                    cartConatiner.append(newCart)


                    const quantity = getElement('total-items').innerText;
                   const currentQuantity = Number(quantity) + 1;
                    getElement('total-items').innerText = currentQuantity;



    

  })
}


// document.getElementById('card-button-1').addEventListener('click',function(){
//    const tittle = getElement('card-title-1').innerText;
//  const price = getElement('card-money-1').innerText;
// const totalPrice = getElement('total-price').innerText;
// currentTotal  = Number(price) + Number(totalPrice);

// getElement('total-price').innerText = currentTotal.toFixed(2);
// const cartConatiner = getElement('card-container');
// const newCart = document.createElement('div');
// newCart.innerHTML =` <div class=" flex justify-between rounded-xl p-4 items-center bg-slate-400">
//                      <img src="./assets/kitchen-1.png" class="w-10" alt="">
//                      <div>
//                         <h2 class="font-bold">${tittle}</h2>
//                         <h2>${price}tk</h2>
//                      </div>
//                     </div>`
//                     cartConatiner.append(newCart)

// })