function compute()
{
 let x=document.getElementById("principal").value ;
  
 if (x>0){
    p = document.getElementById("principal").value;
    r=document.getElementById("rate").value;
  y=document.getElementById("years").value
;
  pay=Math.round(p*(r/100)*y)
 ;
 const d = new Date().getFullYear(); 

  ny=Number(d)+Number(y);
  
   document.getElementById("result").innerText= "if you deposit " + p + ", at an interest rate of %" + r+". You will receive an amount of "+pay+", in the year "+ny;
 }
 else {
   alert("Enter a positive number");       document.getElementById("principal").focus()   
 }

 

}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}