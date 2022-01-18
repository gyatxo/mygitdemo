// q1

var student = {
    name: 'urgen',
    sem: 'V',
    rollno: 23
};

Object.osize = function(myobj){
    var objsize= 0, key;
    if (key in myobj){
        if (myobj.hasOwnProperty(key)) objsize++;
    }
    
    return objsize;
}
var num= Object.osize(student);
console.log(num);



// q2

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }]

    for (let index = 0; index < library.length; index++) {
        var book = "title of the book is " + library[index].title + " BY "+ library[index].author;
if(library[index].readingStatus){
    console.log("you have already read the book. "+book);
}
        else{
            console.log("you need to read."+ book);
        }
    }


// volume of a cylinder

function cylinder(height, radius) {
    
    this.h = height;
    this.r= radius; 
    this.volume = function(){
        var v;
        const pie= 3.1415;
        v= (this.r *this.r) * this.h* pie;
        return "Volume of the cylinder: " + v;
    }
}

var cylVol = new cylinder(7,2);

console.log(cylVol.volume());



//bubblesort
var num = [2,3,1,6,9,3,6,4,5,7,8];
function bublesort(num1){
for (var i=0; i< num1.length -1; i++){
    for (var j=0; j< num1.length -1-i; j++){
        if(num1[j]> num1[j+1]){
            var temp = num1[j];
        num1[j] = num1[j+1];
        num1 [j+1]= temp;
        }
    }
    
}
return num1;
}
console.log(bublesort(num));


