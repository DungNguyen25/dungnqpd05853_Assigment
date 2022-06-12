let products = {
  data: [
    {
      productName: "Trà xanh trộn Frappucino",
      category: "TeaFrappuccino",
      image: "img/frappucino-tea-ice.png",
    },
    {
      productName: "Trà xanh nóng(Trái Tim)",
      category: "TeaHot",
      image: "img/hot-tea-heard.png",
    },
    {
      productName: "Trà xanh nhẹ(lạnh)",
      category: "TeaCold",
      image: "img/ice-tea.png",
    },
    {
      productName: "Trà xanh(Phin)",
      category: "TeaHot",
      image: "img/hot-tea-immersion.png",
    },
    {
      productName: "Trà xanh nóng",
      category: "TeaHot",
      image: "img/hot-tea.png",
    },
    {
      productName: "Trà xanh bạc hà(lạnh)",
      category: "TeaCold",
      image: "img/ice-tea-mine.png",
    },
    {
      productName: "Trà xanh bạc hà",
      category: "TeaHot",
      image: "img/hot-tea-mint.png",
    },
    {
      productName: "Trà xanh chanh(lạnh)",
      category: "TeaCold",
      image: "img/ice-tea-lemon.png",
    },
    {
      productName: "Trà xanh xây đá",
      category: "TeaStone",
      image: "img/stone-tea.png",
    },
    {
      productName: "Trà xanh xây(Đem về)",
      category: "TeaStone",
      image: "img/stone-tea-glass.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  // productwater div
  let productwater = document.createElement("div");
  productwater.classList.add("product-water");
  productwater.classList.add("content-zoom");
  // img
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.classList.add("water-img");
  productwater.appendChild(image);
  card.appendChild(productwater);
  //product name
  let name = document.createElement("h3");
  name.classList.add("water-h3");
  name.innerText = i.productName;
  productwater.appendChild(name);
  card.appendChild(productwater);

  document.getElementById("products").appendChild(card);
}
function filterProduct(value) {
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
window.onload = () => {
  filterProduct("all");
};
// onscroll
