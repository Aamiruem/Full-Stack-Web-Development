
// Equality Operators

// == (Loose Equality)
// === (Strict Equality)
// If statement
// let x;
// if (x == 5) {
//     console.log("x is 5");
// }

// // Conditional expression
// const result = x == 5 ? "x is 5" : "x is not 5";

// // Function
// function isEqual(a, b) {
//     return a == b;
// }

// // Object property
// const obj = { x: 5 };
// if (obj.x == 5) {
//     console.log("obj.x is 5");
// }








// Inequality Operators

// != (Loose Inequality)
// !== (Strict Inequality)


// If statement

// if (x != 5) {
//     console.log("x is not 5");
//   }
  
//   // Conditional expression
//   const result1 = x != 5 ? "x is not 5" : "x is 5";
  
//   // Function
//   function isNotEqual(a, b) {
//     return a != b;
//   }
  
//   // Object property
//   const obj1 = { x: 5 };
//   if (obj1.x != 5) {
//     console.log("obj.x is not 5");
//   }











//   Relational Operators

//   > (Greater Than)
//   < (Less Than)
//   >= (Greater Than or Equal To)
//   <= (Less Than or Equal To)
// If statement

// let x = 10;
// if (x > 5) {
//     console.log("x is greater than 5");
//   }
  
//   // Conditional expression
//   const result = x > 5 ? "x is greater than 5" : "x is less than or equal to 5";
  
//   // Function
//   function isGreaterThan(a, b) {
//     return a > b;
//   }
  
//   // Object property
//   const obj = { x: 5 };
//   if (obj.x > 5) {
//     console.log("obj.x is greater than 5");
//   }













//   Logical Operators

//   && (Logical And)
//   || (Logical Or)
//   `` (Logical Not)

// If statement
let x = 6;
let y = 8;
if (x > 5 && y > 5) {
    console.log("both x and y are greater than 5");
  }
  
  // Conditional expression
  const result = x > 5 && y > 5 ? "both x and y are greater than 5" : "at least one of x or y is less than or equal to 5";
  
  // Function
  function areBothGreaterThan(a, b, c) {
    return a > c && b > c;
  }
  
  // Object property
  const obj = { x: 5, y: 5 };
  if (obj.x > 5 && obj.y > 5) {
    console.log("both obj.x and obj.y are greater than 5");
  }
