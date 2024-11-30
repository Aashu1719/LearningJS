// Objects are the most important data type and form the building block for modern js. 
// unlinke primitive datatypes (number, string, boolean, null, undefined), which hold a single value, objects can hold multiple values as properties. 

// In js, an objects is a collection of related data and functions, known as properties and methods. 
// Properties are "key:value" pairs that store data, while methods are functions associated with the object that can manipulate its properties. 

// Ex : 1 Simple example of an object that store like a variable 
const o = new Object();
o.justNum = 1;
console.log(o);
// { justNum: 1 }



// Ex : 2 Here  “displayinfo” is a method of the school object that is being used to work with the object’s data, stored in its properties.

let school = {
    name : 'Vivekandana School', 
    location : 'Delhi', 
    established : '1971',
    displayInfo : function () {
        console.log(`${school.name} was esatblished in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();
// OP : Vivekandana School was esatblished in 1971 at Delhi



// ########################## ###################################3 some theory ###########################
// Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.

// An object is a refrence data type. 

// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.



