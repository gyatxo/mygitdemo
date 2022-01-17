var a = 20;
var b = 15;
var c = 50;

function greatestnum(){
    if (a>b&& a>c){
        console.log("The greatest number is " + a);
    }
    else if (b>a && b>c){
        console.log("The greatest number is " + b);
    }
    else {
        console.log("The greatest number is " + c);
    }
}

greatestnum();

// ARRAYS
var StudentNames =['manoj','urgen','rupesh','ashok'];
StudentNames.push('ram');
var index = StudentNames.indexOf('urgen');
StudentNames.splice(index,2);
for( var i=0; i<StudentNames.length;i++){
    console.log(StudentNames[i]);
}
var index1 = StudentNames.indexOf('ram');
console.log(index1);


// LOgical operators

if(1=='true'){
    console.log("true");
}
else{
    console.log("false");
}
