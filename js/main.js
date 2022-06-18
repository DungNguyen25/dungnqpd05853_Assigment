// question
const items = document.querySelectorAll(".items");
function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));
// san pham
let products = {
  data: [
    {
      productName: "Trà xanh trộn Frappucino",
      category: "TeaFrappuccino",
      image:
        "https://dsm01pap004files.storage.live.com/y4mvC9kbTFHyXR7mJIHkdxFFS-DfIyzR_EvXeQdjWvdQGyo_xUYqjEYuin8HK3VE06H1tkw92fcljWKo8pWs3_XRgYH2lfGN_aProfhFkOj5E7sqmP7Wbn07LmYFeSOk-QRMR5M5rvBZ849mZi-iqOmDFB9lXw-6JVajkF2yDaRXWH3iVBzGnlkozvAzIr5s7msY-xXA62V3TwHE6Xe-B4iL0S18UV6_ZPJ-VrRjqli7eE?encodeFailures=1&width=208&height=320",
    },
    {
      productName: "Trà xanh nóng(Trái Tim)",
      category: "TeaHot",
      image:
        "https://dsm01pap004files.storage.live.com/y4m17fGphsguJR617-8ftU98jjYzdaSj1Ixem5u23i4sFtklUMda8e0I40FOLskJycOmOYeYvWU4jkv3LRgRMROIHg5y0rRzYc4mMA4NWTanptMBupgd3ixwuRPbM8W32_2oRjtt51A7DqJ3kjBVGQDxU3yjFlqH3iyHrb207eXHBnw3EQmn42DH74K0-LWYFpZR5oXjATSNFaLu9b1lPcCkSV17u6ZYZBLeI_PXNXFUxw?encodeFailures=1&width=223&height=232",
    },
    {
      productName: "Trà xanh nhẹ(lạnh)",
      category: "TeaCold",
      image:
        "https://dsm01pap004files.storage.live.com/y4mmWDhsKc9rIfgl9A8mcw7xx2V2VfZsLCbXulz5viqeCvc85H2Z3e3fRcbKAJyeL0Sb4UQuXZVtBlQs-oTqb2S2yi-N2Hz7604fjl7l_ERd6LACrNGABjzlvu7VxKZmiqIjAsJJg0A-IxDtyJgjD4tOkkwr8VtdVQVfu2PzPPpX8OoGAI10nwpbKf-kP59Un4MTsx7P3IoXYyu4CslL7rA_m_6zK_1Wu4WSmvzOuNxckY?encodeFailures=1&width=277&height=390",
    },
    {
      productName: "Trà xanh(Phin)",
      category: "TeaHot",
      image:
        "https://dsm01pap004files.storage.live.com/y4m3uhqwoTN-OCR0rrZJ6f-fqkfivOBlLtCpx9x-0kmVS7psm6W5RNM2qUZqVYS1Alzhiwzfdq0VJs6iI_FXlfIgZ4Er2G82xB5PMSwb1YycC4LjJb3nErkofq7mM50JGLiFfZCtr0GNqsMoa23RoTHiGysDyAAF10kmc0yWblStEYdgRDuAKncAcjRgL4XP5UixK0tKpr5YIOO6DI-M1-8ayGZ_ZZrXmeOpoDTeBM_Gts?encodeFailures=1&width=352&height=297",
    },
    {
      productName: "Trà xanh nóng",
      category: "TeaHot",
      image:
        "https://dsm01pap004files.storage.live.com/y4mu1nF1MvtmFeMPAWBLDrYePjGPxk3POaGtDu_frmvsHf6qQ7PixTTJXZh-njvDGZ9ptuNfbm_EarWr9qNckvgIKpTW4ZjHezkJyXV6HwKMfaqFnuUK12HTkKgxAN8fS3yFGSudJ2Y_L48OS-UT0bxD7x4JrhBvEZRZPj_azzQ3MQyuVGwX8ogtKljGnPc3HzxiMdV0AMA98BUNSUpuW-6dUsDn-ddef4WYQ7MloZA5Vw?encodeFailures=1&width=164&height=139",
    },
    {
      productName: "Trà xanh bạc hà(lạnh)",
      category: "TeaCold",
      image:
        "https://dsm01pap004files.storage.live.com/y4mADtzyiYaj-BJ5qdKEC0mof6WdWso-6Q_cosR9JfBc0LPJMB6kYTQDtf3jpAp1covYHbuRh3R1S-6KA-wpF9HOgVEuUMA2H-abtn2bzhTn3z7a1slMiO63UuqKI1_ruxHbOiIg8J6Vyk3zd69WN6okZP-DLdR8u7DWVmkf9twmbDyS3gYWnKn6ZxiVBQ7nP47nywcZIxjM_t-3QaItt6NfqsHgjvfPpdYqYRsArHKlhY?encodeFailures=1&width=159&height=345",
    },
    {
      productName: "Trà xanh bạc hà",
      category: "TeaHot",
      image:
        "https://dsm01pap004files.storage.live.com/y4mqCHWljLYb3wm9yFXGuKtzivfwxf3wW_ETX_n4eLEzA9O3UszZmsJhvpIsuXBqNZ425Mf8kuHQtFvvaAQtTFygeuKFWFSvDJWcjS0eVcBwLveEGOk5Sg4m3twOUBKT_iPQeC0NHIKBR_RR73bs9DUUmEs9ULo3lkbdpKWOkMqhBZYHgOxcNwQ8wsKNz-wizC7L8W9kYjZUN2YJ_6z1ufzO0bIryt9dx8zCuR9G2a14Bs?encodeFailures=1&width=268&height=273",
    },
    {
      productName: "Trà xanh chanh(lạnh)",
      category: "TeaCold",
      image:
        "https://dsm01pap004files.storage.live.com/y4mxPMpW0aC_5JHeRvrC4Ll6TdSZgytq2AItaktec9dFCxbp6S1csE0VKfaDdcKjeX_w2m6k8li1VuDNCOKDHrqwJNx_mrLB2yafECqCEgufeUM0XO0XZfomvoqoTVHGN6S1O9b6mA5Kt9j8wjB0Mu7TDHoNQGuGh8dfXNKLNjoHAO07ROqd2k27qQ8g0V2m5imbalmCNbqqMUjdYqpbIqOZwcf4maQyZPHH4J3clrTEbE?encodeFailures=1&width=196&height=212",
    },
    {
      productName: "Trà xanh xây đá",
      category: "TeaStone",
      image:
        "https://dsm01pap004files.storage.live.com/y4mJU4XA23S7Mm6Ozic3iSeipbHSKqHiDKrrXDOirQHYhlK84bXt2ceVfW387ut9j3-SNlkpJADl0dWwz-e_Evj4dwVXez4y9Ke6PC0xmVFJFQOuyn8FEOw4w-OUcJYPwikt70t67i0mOy_iZf-PA-1JoQnREDA2IGOvGwISJIpXxBw1xWdjW8D7awuI0httq5XJ2HgCn_zLRcs_1lZXjZQxLoZbdxZVs8NTPUDJOC624I?encodeFailures=1&width=372&height=329",
    },
    {
      productName: "Trà xanh xây(Đem về)",
      category: "TeaStone",
      image:
        "https://dsm01pap004files.storage.live.com/y4mQHtXE_ILcuID8fUOEl745TKNY2qC61-SGTl_IVE0zwFzup324fUf333_22Yib0JHVlfGIM_PJ_cPNDmWPhA8-8WdwX18zqOZyZ_Y9a94fyeAhzidIMeuk2749K0gEc6c4hlyWEgQEMRkIX0DK7KoFfTbsRziOGxKHsmuegpA0MaL4uW76l0KoF9O0aL38rL-cNyyied6vDOaHd9TdE2s6j_XRmjIx6PqaYRyIQcqG90?encodeFailures=1&width=307&height=396",
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
