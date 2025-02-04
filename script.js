//your code here
const body = document.querySelector("body")
const div = document.querySelector(".div")
const img1 = document.querySelectorAll("img")
let a = Math.round(Math.random()*5)
if(a==0){      
	a = 1
}
let x = document.createElement("img")
     x.className = `img${a}`               
	div.insertBefore(x,img1[a])
let a = []
div.addEventListener("click",(e)=>{
	 a = e.target.className
	 
	// console.log(e.target==e.target)
})
console.log(a)
console.log(b)