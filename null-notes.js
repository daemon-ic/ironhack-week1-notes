

// in javascript "0" and "null" evaluates as false
// but a HACK is to do if("0"), because it will convert the value to boolean
// not defined does not equal not empty or falsey !!!!!!!!
// if ("hi" == true) {
//   console.log("gets ignored");
// }
// if ("hi") {
//   console.log("gets returned");
// }
// if ("0") {
//   console.log("gets returned");
// }
// if ("0" == true) {
//   console.log("gets ignored");
// }
// if ("null") {
//   console.log("gets returned");
// }
// if ("null" == true) {
//   console.log("gets ignored");
// }
// const variable = 0;
// if (variable) {
//   console.log("gets ignored");
// }
// const variable2 = 1;
// if (variable2) {
//   console.log("gets returned");
// }
// const variable3 = null;
// if (variable3) {
//   console.log("gets ignored");
// }
// if (variable4) {
//   console.log("ERROR");
// }
