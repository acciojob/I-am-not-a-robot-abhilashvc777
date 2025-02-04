//your code here
const div = document.querySelector(".div")
const img1 = document.querySelectorAll("img")
// console.log(img1[0]==img1[0])
div.addEventListener("load",()=>{
	let x = img1[0] 
img1[0] = img1[1]
img1[1] = x
console.log(img1)
})
