
function changeMsg()
{
     var x = document.getElementById('a')
     document.getElementById('a').style.color = "Red"
     if (x.innerHTML === "Welcome to Javacript")
     {
        x.innerHTML = "Friday it is !!!";
     } 
     else
     {
      x.innerHTML = "Welcome to Javacript";
     }
   
}