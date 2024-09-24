// const url = './api/people.json'

// // const response = fetch(url)
// // console.log(response)

//  const btn = document.querySelector('.btn')

//  btn.addEventListener('click', async () =>{
// const response = await fetch(url)
// const data = await response.json()
// displayItems(data)
//  })
 
//  function displayItems(items){
// const displayData = items.map((item)=>{
// const {name,age}=item
// return `<p>${name} ${age}</p>`
// }).join('')
// const element = document.createElement('div')
// element.innerHTML= displayData
// document.body.appendChild(element)
//  }



// const url = 'https://icanhazdadjoke.com/'
// const btn = document.querySelector('.btn')
// const result = document.querySelector(".result")

// btn.addEventListener('click',()=> {
//   fetchDadJokes()
// });
// const fetchDadJokes = async () => {
//   result.textContent ='loading...'
//   try {
//     const response = await fetch(url,{
//       headers:{
//         Accept:'application/json',
//         "User-Agent":"learning app"
//       }
//     })
//     if(!response.ok){
//       throw new Error('error')
//     }
//     const data = await response.json()
//     result.textContent = data.joke
//   } catch (error) {
//     result.textContent = 'there was an error'
//   }
// }
// fetchDadJokes()

// course-api.com

const url = 'https://www.course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
  productsDOM.innerHTML = ` <div class="products-container">
         ${productList}
          
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
