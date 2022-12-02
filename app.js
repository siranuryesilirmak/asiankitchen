const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
    "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const singleItem = document.querySelector("#singleItem")

const buttonArray = ["All", "Korea", "Japan", "China"]
let buttonDIV = document.querySelector("#buttonDIV")

//button oluşturma
buttonArray.forEach((currentValue, index)=> {
  let button = document.createElement("button", "btn-outline-secondary")
  button.classList.add("border", "border-black", "m-4")
  button.id = currentValue
  button.innerHTML = currentValue
  let buttonLoc = document.querySelector("#buttonDIV")
  buttonLoc.append(button)
})


function array(index){
    index.map(item =>{
    let menuDOM = document.querySelector('.section-center')

    let divGeneral = document.createElement('div');
    divGeneral.classList = 'menu-items col-6';
    menuDOM.appendChild(divGeneral);

    let newImage = document.createElement("img")
    newImage.classList.add("photo")
    newImage.src=item.img
    divGeneral.append(newImage)

    let menuInfo = document.createElement('div')
    menuInfo.classList.add("menu-info")
    divGeneral.append(menuInfo);

    let menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")
    menuInfo.append(menuTitle);

    let title = document.createElement("h4")
    title.innerHTML = item.title
    menuTitle.append(title)

    let price = document.createElement("h4")
    price.classList.add("price")
    price.innerHTML= item.price
    menuTitle.append(price)

    let menuText = document.createElement("div")
    menuText.classList.add("menuText")
    menuText= item.desc
    menuInfo.append(menuText)
  }) 
}

let grup = 'category'
sorting = menu.reduce((acc, menuElemanı) => {
let key = menuElemanı[grup]

if(!acc[key]){
acc[key] = []
}
acc[key].push(menuElemanı)
return acc
}, {})

//button click
let btnAll = document.querySelector("#All")
let btnKorea = document.querySelector("#Korea")
let btnJapan = document.querySelector("#Japan")
let btnChina = document.querySelector("#China")

btnAll.addEventListener("click", click)
btnKorea.addEventListener("click", click)
btnJapan.addEventListener("click", click)
btnChina.addEventListener("click", click)


let body = document.querySelector('.section-center')
function click(){
  while(body.hasChildNodes()){
    body.removeChild(body.firstChild)
  }
  if(this.id == 'All'){
    array(menu)
  }else if (this.id == 'Korea'){
    array(sorting.Korea)
  }else if(this.id == 'Japan'){
    array(sorting.Japan)
  }else if(this.id == 'China'){
    array(sorting.China)
  }
}


