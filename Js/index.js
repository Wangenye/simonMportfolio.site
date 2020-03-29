// // function notCompleted(){
// // 	alert("Hello,Am Simon. Welcome to my Portfolio.\n.The site is now fully Responsive But the work area, is still under development.Thank You !!")
// // }
// const spans = document.querySelectorAll('h1 span')

// spans.forEach(span=> span.addEventListener('mouseover',function(e){
// 	span.classList.add('animated','rubberBand')
// }))

// spans.forEach(span=> span.addEventListener('mouseout',function(e){
// 	span.classList.remove('animated','rubberBand')
// }))


// function myFunc(){
// 	var x = document.getElementById("hy")
// 	var y = document.getElementById("hp")
// 	var w = document.getElementById("hy")

// 	if (x.style.display=="none")
// 	{
// 		x.style.display="block";
// 	} else
// 	{
// 		x.style.display="none";
// 	}
// }



const showRequiredCategory = event => {
	const getId = event.id
	const links = document.querySelectorAll('work-category button')
	for(i=0; i<links.length; i++){
		if (links[i].hasAttribute('class')) {
			links[i].classList.remove('active')
		}
	}

	event.classList.add('active')
	const getCategory = document.querySelector('.category-$getId')
	const categories = document.querySelectorAll('div[class ^= "category-"]')
	for(i=0; i<categories.length; i++){
		if (categories[i].hasAttribute('class')) {
			categories[i].classList.remove('showCategory')
			categories[i].classList.add('hideCategory')
		}
	}

	getCategory.classList.remove('hideCategory')
	getCategory.classList.add('showCategory')
}
