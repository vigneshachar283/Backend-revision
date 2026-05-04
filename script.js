const fs = require('fs');

fs.appendFile("hey.txt","I am Fine ",function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.rename("hey.txt","hi.txt",function(err){
    if(err) console.log(err);
    else console.log("done")
})