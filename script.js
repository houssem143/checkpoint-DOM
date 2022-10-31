var btn1=document.getElementsByClassName('plus')
var btn2=document.getElementsByClassName('minus')

function calcul(e){
  var btn=e.target
  var div=btn.parentElement
  console.log(div.parentElement.parentElement);
var tr = div.parentElement.parentElement
var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML)
var price = tr.querySelector('.price')
console.log(unitPrice)
  var p=div.querySelector('p')
  var count=Number(p.innerHTML)
  count+=1  
  p.innerHTML=count
  price.innerHTML = count * unitPrice
somme()
}
for (let i = 0; i < btn1.length;i++){
    btn1[i].addEventListener('click',calcul)
}
function calcul1(e){
    var btn=e.target
    var div=btn.parentElement
    var tr = div.parentElement.parentElement
var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML)
var price = tr.querySelector('.price')
    console.log(div);
    var p=div.querySelector('p')
    var count=Number(p.innerHTML)
    if(count>0)
    count-=1  
    p.innerHTML=count
    p.innerHTML=count
    price.innerHTML = count * unitPrice
    somme()
  }
  for (let i = 0; i < btn2.length;i++){
      btn2[i].addEventListener('click',calcul1)
  }
var like=document.getElementsByClassName('like')
for (let i=0;i<like.length;i++){
 like[i].addEventListener('click',function(){
  console.log(like[i]);
if (like[i].style.color== "red"){
 like[i].style.color= "#424242"}
else {
 like[i].style.color= "red"
}
})
}
var all=document.getElementById('total')
var total=Number(all.innerHTML)
console.log(typeof total)
var prices = document.querySelectorAll('.price')
console.log(prices);
function somme(){
var s = 0
for (let i = 0; i < prices.length; i++) {
  s = s+ Number(prices[i].innerHTML)
}
all.innerHTML = s
}
var deleteBtns = document.getElementsByClassName('delete')
function del(e){
var btn = e.target
var tr = btn.parentElement.parentElement.parentElement.parentElement
var price = tr.querySelector('.price')
price.innerHTML = 0
tr.remove()
somme()
console.log(tr);
}
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click',del) 
}