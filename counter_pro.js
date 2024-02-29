const Dbtn = document.getElementById("negtiv");
const Rbtn = document.getElementById("reset");
const Ibtn = document.getElementById("positiv");
const Count1 = document.getElementById("count");

let count = 0;

Ibtn.onclick = function(){
    count++;
    Count1.textContent = count;
}
Dbtn.onclick = function(){
    count--;
    Count1.textContent = count;
}
Rbtn.onclick = function(){
    count = 0;
    Count1.textContent = count;
}