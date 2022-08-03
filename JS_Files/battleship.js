function playBattleship()
{
   const locations = [0,1,1,0,1];
   let hitcount = 0;
   let guesscount = 0;

   while (hitcount != 3)
   {
    //Accept the choice fom user
     const choice = Number(prompt('Enter a nuber(1-5)'))

     //Aleart if invalid number is entered
     if(choice < 0 || choice > 5)
     {
       alert('Enter a valid number')
       continue
     }

     guesscount++ // Increment by 1
     if(locations[choice - 1] == 1)
     {
       alert('You have hit a battleship')
       hitcount++
       locations[choice-1] = 2
     }
     else if(locations[choice-1] == 2)
     {
       alert('You have already hit this battleship')
     }
     else{
        alert("You missed the battleship")
     }

   }
   //display Total Guess
   alert('Total guess :' + guesscount)
}