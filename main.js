class Cat {
  constructor(name, picture, clicks = 0) {
    this.name = name;
    this.picture = picture;
    this.clicks = clicks;
  }
}

const cat1 = new Cat("Andy", "./img/1.jpg");
const cat2 = new Cat("Murka", "./img/2.jpg");
const cat3 = new Cat("Kisa", "./img/3.jpg");
const cat4 = new Cat("Barsik", "./img/4.jpg");
const cat5 = new Cat("Leva", "./img/5.jpg");
const cat6 = new Cat("Kitty", "./img/6.jpg");

//List of Cats
const cats = [cat1, cat2, cat3, cat4, cat5, cat6];

//Cats list

//Select left Column in Dom

const leftColumn = document.querySelector(".col-4");

//Construct Cat List
const ul = document.createElement("ul");
ul.className = "list-group";
for (let cat of cats) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = cat.name;
  li.addEventListener("click", () => {
    displayCat(cat);
  });
  ul.appendChild(li);
}
leftColumn.appendChild(ul);

//Function DisplayCat

const displayCat = cat => {
  const rightColumn = document.querySelector(".col-8");
  rightColumn.innerHtml = "";
  //display the current cat that I clicked

  const h1 = document.createElement("h1");
  h1.textContent = cat.name;

  rightColumn.appendChild(h1);

  const img = document.createElement("img");
  img.setAttribute("src", cat.picture);
  img.setAttribute("alt", "cat");
  img.addEventListener("click", () => {
    cat.clicks++;
    h2.textContent = `Clicks: ${cat.clicks}`;
  });
  rightColumn.appendChild(img);

  //Display number of Clicks
  const h2 = document.createElement("h2");
  h2.textContent = `Clicks: ${cat.clicks}`;
  rightColumn.appendChild(h2);

  //Add cat Image listener
};
