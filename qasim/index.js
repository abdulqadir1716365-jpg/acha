
  const products = [
    {
      id:1,
      name:"Shoes",
      price:2000,
      image:"fiurts5.jfif"
    },

    {
      id:2,
      name:"Watch",
      price:3000,
          image:"friuts1.jfif"
    },

    {
      id:3,
      name:"Bag",
      price:1500,    image:"friuts1.jfif"
    },
        {
      id:3,
      name:"Bag",
      price:1500,    image:"friuts3.jfif"
    },    {
      id:3,
      name:"Bag",
      price:1500,    image:"friuts4.jfif"
    },
        {
      id:3,
      name:"Bag",
      price:1500,    image:"fiurts5.jfif"
    }
  ];

const productList = document.getElementById("productList");

const cartItems = document.getElementById("cartItems");


  let cart = [];


  products.forEach(product => {








    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
    <div id="abdu">
      <h3>${product.name}</h3>
      <p>Price: Rs ${product.price}</p>
      <img src="${product.image}" alt="${product.name}" width="150">
      <button onclick="addToCart(${product.id})">
        Add To Cart
      </button>
      </div>
    `;

    productList.appendChild(div);
  });






  function addToCart(id){

    const product = products.find(p => p.id === id);
cart.push(product);
    const li = document.createElement("li");

    li.innerHTML = `
        ${product.name} - Rs ${product.price}
        <button onclick="removeItem(this)">Remove</button>
    `;

    cartItems.appendChild(li);
}

function removeItem(btn){
    btn.parentElement.remove();
}

let box = document.getElementById("box");

let pos = 0;


function move() {
  pos++;
  box.style.left = pos + "px";
  if (pos > window.innerWidth) {
    pos = -200; // reset back
  }

  requestAnimationFrame(move);
}

move();

function move(){
  pos++;
  box.style.left = pos + "px";
  if(pos > window.innerWidth) {
    poss = -200;
  }
  requestAnimationFrame(move)
}
move()




function move() {
  pos++;
  box.style.left = pos + "px";
  if (pos > window.innerWidth) {
    pos = -200; // reset back
  }

  requestAnimationFrame(move);
}

move();