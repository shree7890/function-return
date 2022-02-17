// return statement

function name(fname, lname, gender) {
  let output;
  if (gender == "male") {
    output = fname + " " + lname;
    // console.log(output);
  } else if (gender == "female") {
    output = fname + " " + lname;
    // console.log(output);
  }
  return output; // return variable
}
// javascript object variable function and array return kora jay
const fullName = name("shreekanta", "dash", "male");
console.log(fullName);

function main() {
  return {
    fname: "shreekanta",
    lname: "dash",
    skill: ["javascript", "react", "firebase"],
    print: function () {
      console.log(this.fname + " " + this.lname + " " + this.skill);
    },
  };
}

const obj = main();
obj.print();

// function er bitore function return kora

function great(msg) {
  function greetings(name) {
    return msg + "," + name + "!";
  }
  return greetings;
}

const res = great("hi everyone");
const final = res("shreekata");
console.log(final);

// function return kore power implement kora

// function base(b) {
//   function power(n) {
//     let res = 1;
//     for (let i = 1; i <= b; i++) {
//       res *= n;
//       //   console.log(b);
//       //   console.log(n);
//     }
//     return res;
//   }
//   return power;
// }
// power multiply korar function
function base(b) {
  return function (n) {
    let res = 1;
    for (let i = 1; i <= b; i++) {
      res *= n;
      //   console.log(b);
      //   console.log(n);
    }
    return res;
  };
}

const base1 = base(14);
const power1 = base1(2);
const base2 = base(4);

console.log(power1);
console.log(base2(2));
console.log(base2(5));
console.log(base2(6));
console.log(base2(7));
console.log(base2(9));
// loop kore kun ekta variable er bitore man store kore raka er jugfol ber korar function

// function store() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//     console.log(sum);
// }

// const res4 = store(2, 3, 6, 8, 9, 10);
// console.log(res4); // console e variable e data store hoy na tai undefined ase
// console.log() kunu kicu return korte pare na tai undefined ase
function store() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum; // sudu matro return korle er man variable e store kora jay
}

const res4 = store(2, 3, 6, 8, 9, 10);
console.log(res4); // console e variable e data store hoy tai undefined ase

// function er modde return sorasori o use kora jay

function person(name, email) {
  return {
    name: name,
    email: email,
  };
  console.log("code executed hobe na"); // kokonoi javascript compiler return er kunu kucu compile korte pare na
}

const per1 = person("shreekanta", "shreekantadash831@gmail.com");
console.log(per1);
console.log(per1.name);
console.log(per1.email);

function host() {
  console.log("hosted the guide for tune");
  return function () {
    console.log("child return function");
  };
}
const hostOut = host();
hostOut();

// funcational return message function

function greeting(mesg) {
  return function (name) {
    // return mesg + "," + name + "!";
    console.log(mesg + "," + name + "!");
  };
}

const get = greeting("hi");
const res2 = get("shreekanta");
// console.log(res2);
