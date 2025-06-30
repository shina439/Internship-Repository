function game(){
    let secretNumber = Math.floor(Math.random() *100) +1;
    let userInput = prompt("enetr a number");
    if(isNaN(userInput)){
        console.log("enter an integer")
    }
    else if(userInput < 1 || userInput > 100){
        console.log('Your iput is either greater than 100 or less than 1')
    }
    else{
        if (userInput == secretNumber){
            console.log('you have won');
        }
        else{
            console.log('you have failled. my number was', secretNumber, "and yours was", userInput)
        }
    }
    
}
