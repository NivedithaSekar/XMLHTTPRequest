var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

//comparing 2 JSON have the same properties without order
console.log(_.isEqual(obj1, obj2));

//prinitng in HTML page with
const div = document.getElementById('Q1');
const ans = document.createElement("pre");
ans.id = "A1";
ans.innerHTML = `The best way to compare two JSON having same properties without order is using loadash isEqual() method.
eg:
    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };
Importing lodash CDN and using isEqual() => _.isEqual(obj1, obj2) // true

 console.log(_.isEqual(obj1, obj2)) outputs "${_.isEqual(obj1, obj2)}"
`;
div.appendChild(ans);