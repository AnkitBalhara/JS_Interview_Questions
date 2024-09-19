// write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

// Ex:-
// console.log(isEmptyObject({name:"Ram"})) || Output :- Object is not empty
// console.log(isEmptyObject({})) || Output :- Object is empty
// console.log(isEmptyObject({name:undefined})) || Output :- Object is empty
// console.log(isEmptyObject({name:null})) || Output :- Object is empty

const isEmptyObject = (obj) => {
  if (Object.values(obj).length === 0) {
    return "Object is empty!!!";
  } else {
    for (const key in obj) {
      if (obj[key] != undefined || obj[key] != null) {
        return "Object is not empty";
      }
    }
    return "Object is empty...";
  }
};

let object1 = {
  name: "Ram",
  bhagat: "Hanuman",
};
let object2 = {name:undefined,name1:null,a:"skmkm"};
let object3 = {name:null};

console.log(isEmptyObject(object1));
console.log(isEmptyObject(object2));
console.log(isEmptyObject(object3));
