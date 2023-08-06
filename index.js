const btn = document.getElementsByTagName("button");
const randomcolor = () =>{
    let val =  "0123456789ABCDE"
    let cons = "#"
    for (let i = 0; i < 6; i++) {
        cons = cons +  val[Math.floor(Math.random() * 16)];
        
    }
    return cons;
}
console.log(randomcolor());
function changerandomcolor(){
  document.body.style.backgroundColor = randomcolor();
}
document.addEventListener("click",changerandomcolor);