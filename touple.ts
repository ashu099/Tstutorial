const Person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];
}={
    name:'Ashutsh',
    age:28,
    hobbies:['cricket','books'],
    role:[2,'author']
};

//touple is   fixed length array

Person.role.push('hello');//this is allowed as an exception  TS can't stop this

console.log(Person);