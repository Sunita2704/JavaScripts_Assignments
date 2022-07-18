function ShowTable()
 {
    let num = prompt("Enter Number");
    for (let i = 1; i <= 10; i++) 
    {
        var j = i * num;
        console.log(`${num} * ${i} = ${j}`);
    }
}