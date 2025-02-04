//your code here
const body = document.querySelector("body")
const div = document.querySelector(".div")
const img1 = document.querySelectorAll("img")
const reset = document.querySelector("#reset")
const verify = document.querySelector("#verify")
const para = document.querySelector("#para")
const h3 = document.querySelector("#h")
reset.style.visibility = "hidden"
verify.style.visibility = "hidden"
let a = Math.round(Math.random()*5)
if(a==0){      
	a = 1
}
let x = document.createElement("img")                           
     x.className = `img${a}`               
	div.insertBefore(x,img1[a])  
   
let b = [] 
let clickHandler = (e)=>{
	para.textContent = ""
	h3.textContent = "Please click on the identical tiles to verify that you are not a robot"
	b.push(e.target.className)
	 if(b.length==1){
		 reset.style.visibility = "visible"
	 } 
	if(b.length==2){
		div.removeEventListener("click",clickHandler)
		reset.style.visibility = "hidden"
		verify.style.visibility = "visible"        
	} 
} 
div.addEventListener("click", clickHandler)
verify.addEventListener("click",()=>{
	if(b[0]==b[1]){
		para.textContent = "You are a human. Congratulations!"
	}else{
		para.textContent = "We can't verify you as a human. You selected the non-identical tiles"
		div.addEventListener("click", clickHandler)
		b = []
	}
	verify.style.visibility = "hidden" 
}) 
reset.addEventListener("click",()=>{ 
	reset.style.visibility = "hidden"  
	b = []
	h3.textContent = "Please click on the identical tiles to verify that you are not a robot"
})
