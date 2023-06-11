const menuDesplegable = document.getElementById("botonMenuDesplegable");
const itemDesplegable1 = document.getElementById("itemDesplegable1");
const itemDesplegable2 = document.getElementById("itemDesplegable2");
const itemDesplegable3 = document.getElementById("itemDesplegable3");
const itemDesplegable4 = document.getElementById("itemDesplegable4");
const itemDesplegable5 = document.getElementById("itemDesplegable5");
const cerrar = document.getElementById("botonMenuDesplegable-close");
const menu = document.getElementById("menu_desplegable-nav");

//Mostrar Menu
menuDesplegable.addEventListener("click", () => {
  menu.style.display = "block";
})


//Cerrar
cerrar.addEventListener("click", () => {
  menu.style.display = "none";
})

// Items
itemDesplegable1.addEventListener("click", () => {
  menu.style.display = "none";
})
itemDesplegable2.addEventListener("click", () => {
  menu.style.display = "none";
})
itemDesplegable3.addEventListener("click", () => {
  menu.style.display = "none";
})
itemDesplegable4.addEventListener("click", () => {
  menu.style.display = "none";
})
itemDesplegable5.addEventListener("click", () => {
  menu.style.display = "none";
})



window.addEventListener('scroll', function () {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const progress = (window.scrollY / (fullHeight - windowHeight)) * 100;

  const progressBar = document.getElementById('progress-bar');
  progressBar.style.height = `${progress}%`;

  const circles = document.getElementsByClassName('progress-circle');
  for (let i = 0; i < circles.length; i++) {
    if (progress >= (i + 1) * (100 / (circles.length + 1))) {
      circles[i].style.backgroundColor = '#48e';
    } else {
      circles[i].style.backgroundColor = '#ccc';
    }
  }
});

// Carrucel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  carouselInner.style.transform = `translateX(-${currentIndex * 25}%)`;
}

//Zoom
var scale = 1.0;
var offsetX = 0;
var offsetY = 0;
var isDragging = false;
var dragStartX = 0;
var dragStartY = 0;
var zoomImage = document.getElementById("zoomImage");

zoomImage.addEventListener("mousedown", startDrag);
zoomImage.addEventListener("mouseup", stopDrag);
zoomImage.addEventListener("mousemove", drag);
zoomImage.addEventListener("mouseleave", stopDrag);

function zoomIn() {
  scale += 0.1;
  zoomImage.style.transform = "scale(" + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
}

function zoomOut() {
  scale -= 0.1;
  zoomImage.style.transform = "scale(" + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
}

function startDrag(e) {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  zoomImage.style.cursor = "grabbing";
}

function stopDrag() {
  isDragging = false;
  zoomImage.style.cursor = "grab";
}

function drag(e) {
  if (isDragging) {
    var deltaX = e.clientX - dragStartX;
    var deltaY = e.clientY - dragStartY;
    offsetX += deltaX;
    offsetY += deltaY;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    zoomImage.style.transform = "scale(" + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
  }
}
// DarkMode
const darkModeToggle = document.getElementById('darkModeToggle');
const style = document.getElementById('style');

darkModeToggle.addEventListener('change', function () {
  if (darkModeToggle.checked) {
    style.setAttribute("href", "css/darkmode.css");
  } else {
    style.setAttribute("href", "css/styles.css");
  }
});


// Función para incrementar los likes cuando se presiona el botón

function incrementLikes() {
  var likeCountElement = document.getElementById('likeCount');
  var likeCount = parseInt(likeCountElement.innerText);
  likeCount++;
  likeCountElement.innerText = likeCount;
}

//Boton de menu desplegable
