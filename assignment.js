function feetToMile(feet){
    var mile = feet * 5280;
    return mile;
}


function woodCalculator(chair, table, bed) {
var  chairCount = chair * 1 ;
var tableCount = table * 3 ;
var bedCount = bed * 5 ; 
var totalWood = chair + table + bed;

return totalWood;
} 

var woodResult = woodCalculator(4, 2, 3);

 console.log(woodResult); 
 
 

 fucntion tinyFriend(friends){ 
    var smallestFriend = friends[0];
 for (let i = 0; i < friends.length ; i++) {
     var element = friends[i];
     if (element>smallestFriend) { smallestFriend = element;
         
     }
     
 } return smallestFriend;
} var smallestFriend = tinyFriend("Lima, Ema, Nusrat, Pushpa ")
console.log(smallestFriend);

