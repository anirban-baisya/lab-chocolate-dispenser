var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color,count){
    if(count <1 ){
        return 'Number cannot be zero/negative';
    }
    else{
        for(i=0;i<count;i++){
            chocolates.unshift(color) //unshift() add items begining of the array
        }
    }
}



//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates,number) {
    let remov_arr = [];
    if (number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else if (number<1)
    {
        return 'Number cannot be zero/negative'
    }
    else{
        for(i=0;i<number;i++){
            remov_arr.push(chocolates.shift()) //remove items from top of chocolates arr & push it to remov_arr

        }
        return remov_arr;
    }
}




//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{    let remov_arr = [];
    if (number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else if (number<1)
    {
        return 'Number cannot be zero/negative'
    }
    else{
        for(i=0;i<number;i++){
            remov_arr.push(chocolates.pop()) //remove items from buttom of chocolates arr & push it to remov_arr
        }
        return remov_arr;
    }
}




//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color )
{    let return_arr = [];
    if (number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else if (number<1)
    {
        return 'Number cannot be zero/negative'
    }
    else{
        for(i=0;i<number;i++){
            return_arr.push(chocolates.pop(color)) //remove items from buttom of chocolates arr & push it to return_arr
        }
        return return_arr;
    }
}



//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates)
{
    let count=[];
    var color = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for(let i=0;i<color.length;i++)
    {
       
   }
return count;
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {

    if (chocolates.length == 0)
        return chocolates;
    if (number < 1)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i <= chocolates.length; i++) {
            if (chocolates[i] == finalColor)
                return "Can't replace the same chocolates";
    

                
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,finalColor)
{   
    if(color==finalColor)
    
        return "Can't replace the same chocolates";
    
    else
    {

    }
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
