var friends=["Rob", "Mike", "Patrick", "Kyle", "Pearce"];

for(var i=0; i <=friends.length; i++ ){
    for(var f = 99; f >=3; f--){
        console.log(f + " lines of code in the file " + f + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (f - 1) + " lines of code in the file");
    
        if(f === 3){
            console.log("2 lines of code in the file 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file");
            console.log("1 line of code in the file 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
      
    }
    
}
