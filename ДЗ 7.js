 let array= [0,1,2,3,4,5,6,7,8,"str"];
function cycle(array) {
    let odd=0;
    let even=0;
    let another=0;
    for(let i = 0; i < array.length ; i++) {
        if (typeof array[i]== 'number'){
            if(array[i]%2==0) {
                even++;
            }
    

            else{
                odd++;
            }
        }
        

        else{
            another++;
        }
    }
    console.log(even);
    console.log(odd);
    console.log(another);
}


cycle(array);
  
  