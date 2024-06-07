const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector(".banner-img");
const bannerText = banner.querySelector("p");
const dots = banner.querySelector(".dots");
const arrowLeft = banner.querySelector(".arrow_left");
const arrowRight = banner.querySelector(".arrow_right");

let index = 0

arrowRight.addEventListener("click", function() {

	console.log(index)
	console.log(slides[index].tagLine)

	updateBanner("right")
	updateDots()
})

  

arrowLeft.addEventListener("click", function() {

	console.log(index)
	console.log(slides[index].tagLine)

 	updateBanner("left")
	updateDots()
})

function updateBanner (clickedButton) {
	if (clickedButton === "right") {
		if (index === slides.length - 1) {
			index = 0
		} else {
			index += 1
		}

	} else if (clickedButton === "left") { 
		if (index === 0) {
			index = slides.length - 1
		} else {
			index -= 1
		}
	}


	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[index].image
	bannerText.innerHTML = slides[index].tagLine
}

for (let index = 0; index < 4; index++) {

	const newDot = document.createElement("div")

	newDot.className = "dot"

	dots.appendChild(newDot)
}

function updateDots() {
	const dotElements = document.querySelectorAll(".dot");
  
	dotElements.forEach(function(dot, dotIndex) {
	  if (dotIndex === index) {
		dot.classList.add("dot_selected")
	  } else {
		dot.classList.remove("dot_selected")
	}

	dot.addEventListener("click", function() {
	
		index = dotIndex;
		updateBanner("dot")
		updateDots()
	})
	})
}

