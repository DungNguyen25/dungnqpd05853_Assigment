// question
const items = document.querySelectorAll(".items");
function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));
// san pham
function filterProduct(value) {
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

  let content = document.querySelectorAll(".card");
  //loop through all cards
  content.forEach((element) => {
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
// mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("light");
}
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bx-sun");
const moonIcon = document.querySelector(".toggle .bxs-moon");
const menu = document.querySelector(".fa-solid .fa-bars");
toggle.addEventListener("change", () => {
  sunIcon.className =
    sunIcon.className == "bx bx-sun" ? "bx bxs-sun" : "bx bx-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});
// nav
function nav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-nav") {
    x.className += "--responsive";
  } else {
    x.className = "header-nav";
  }
}
// footer
function footer() {
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
