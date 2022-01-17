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