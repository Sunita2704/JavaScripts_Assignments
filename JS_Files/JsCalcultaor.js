function add()
{
   var n1 = document.getElementById('no1').value;
   var n2 = document.getElementById('no2').value;
   var result = Number(n1) + Number(n2)
   document.getElementById('res').innerHTML = result
}


function substract()
{
    var n1 = document.getElementById('no1').value;
    var n2 = document.getElementById('no2').value;
    var result = Number(n1) - Number(n2)
    document.getElementById('res').innerHTML = result
}

function mult()
{
    var n1 = document.getElementById('no1').value;
    var n2 = document.getElementById('no2').value;
    var result = Number(n1) * Number(n2)
    document.getElementById('res').innerHTML = result
}

function div()
{
    var n1 = document.getElementById('no1').value;
    var n2 = document.getElementById('no2').value;
    var result = Number(n1) / Number(n2)
    document.getElementById('res').innerHTML = result
}