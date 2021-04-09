var array100 = [];

for(var i=1; i < 101; i++) {
    

    if(i%5==0 && i%3==0){
        array100.push("FizzBuzz");
    }else if(i%5==0){
        array100.push("Buzz");
    }else if(i%3==0){
        array100.push("Fizz");
    }else{
        array100.push(i);
    }

    document.getElementById("scala").innerHTML = array100[array100.length-1];
     
}


console.log(array100);


