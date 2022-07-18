function CheckPrimeNumber()
{
    let num = prompt("Enter Number");
    var i, flag = true;
    for (i = 2; i <= num - 1; i++)
        if (num % i == 0) {
            flag = false;
            break;
        }
     // Check and display output
     if (flag == true)
     console.log(num + " is prime Number");
    else
     console.log(num + " is not prime Number");
          
}

