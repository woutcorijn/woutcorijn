var Name = ["Wout C.","Wout Co.","Wout Cor.","Wout Cori.","Wout Corij.","Wout Corijn."];
var Run = false;

function Title_Animation() {
var step = 0;
var state = false;
if(Run == false) {
Run = true;
var Loop = setInterval(Name_Loop, 100);
function Name_Loop(){
      if(step < Name.length && state == false) {step++;}
      if(step == Name.length) {state = true;}
      if(step > 0 && state == true) {step--;}
      if(step == 0 && state == true) {
        clearInterval(Loop);
        Run = false;
 }
 document.getElementById("title_name").innerHTML = Name[step];
}
}
}
