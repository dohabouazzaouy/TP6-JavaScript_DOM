let div=document.createElement("div");
let p=document.createElement("p");
p.textContent="Ceci est un paragraphe";
p.style.backgroundColor="lightblue";
p.style.textAlign="center";
let btnModifier=document.createElement("button");
btnModifier.textContent="Modifier";
let btnReset=document.createElement("button");
btnReset.textContent="Reset";
div.appendChild(p);
div.appendChild(btnModifier);
div.appendChild(btnReset);
document.body.appendChild(div);
btnModifier.addEventListener("click",function () {
  p.textContent="Le text a été modifier";
  
});
btnReset.addEventListener("click",function () {
  p.textContent="Ceci un paragraphe";
  
});




