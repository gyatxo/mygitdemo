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


// OBJects

var student = {
    Name: "urgen",
    college: "kcc",
    age: 25,
    greeting: function(){
        
        return "hi my name is " + this.Name + " and i am " + this.age + " years old. my college name is " + this.college;
    }
    
};

var hi = student.greeting();
console.log(student.greeting());
console.log(hi);

var student1 = new Object();
student1.Name = 'manoj';
student1.age = 35;
student1.greet = 'texas';
console.log(student1.greet);

function student2(name, age){
    this.name= name;
    this.age= age;
}

var s1= new student2('gyatso',25);
console.log(s1.name);