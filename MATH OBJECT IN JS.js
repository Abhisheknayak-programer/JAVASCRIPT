//                               MATH OBJECTS IN JAVASCRIPT


// // EX-1 This method shows how to find the math object




// let m =Math;
// console.log(m);






// // EX-2   This method shows how to find the roundoff of the numbers 




// let a = 69.7;
// let b = 738.29;

// console.log("The RoundOff Value Of a And b is : ",Math.round(a), Math.round(b));

// console.log("The Round Up Value Of a And b is : ",Math.ceil(a), Math.ceil(b));

// console.log("The Round Down Value Of a And b is : ",Math.floor(a), Math.floor(b));

// console.log("The Absolute Value Of a And b is : ",Math.abs(a), Math.abs(b));



// // NOTE :- the absolute value of a negative number is always a positive number.

// console.log("The Absolute Value Of a And b is : ",Math.abs(-a), Math.abs(-b));






// // EX-3   This method shows how to find the power of the numbers 



// console.log("The 2 to the power 2 is : ", Math.pow(2,2));
// console.log("The 2 to the power 7 is : ", Math.pow(2,7));
// console.log("The 12 to the power 17 is : ",Math.pow(12,17));
// console.log("The 22 to the power 27 is : ", Math.pow(22,27));






// // EX-4   This method shows how to find the rootover of the numbers 




// let c = 2;
// let d = 3;

// console.log("The  rootover of c is : ", Math.sqrt(c));
// console.log("The  rootover of d is : ", Math.sqrt(d));







// EX-5 This method shows how to find the trigonometric values




// console.log("The sin value of 45 is : ", Math.sin(45));

// console.log("The cos value of 45 is : ", Math.cos(45));

// console.log("The tan value of 45 is : ", Math.tan(45));

// console.log("The sin value of PI is : ", Math.sin(Math.PI));






// // EX-6 This method shows how to find the Minimum and Maximum values



// sahil1 = 12.3;
// sahil2 = 12.2;
// sahil3 = 12.6;
// sahil4 = 12.0;

// console.log("The max no. is  : ",Math.min(sahil1,sahil2,sahil3,sahil4));

// console.log("The max no. is  : ",Math.max(sahil1,sahil2,sahil3,sahil4));







// // EX-7 TYPICAL QUESTION FOR PRACTICE




// a = [1,20,3,4,5];

// let large = a[0];
// for(i=0;i<a.length;i++){
//     if(large<a[i]){
//         large=a[i];
//     }  
// }
// console.log("The large no. is : " , large);








// // EX-8  This example shows how to generate a random number 



// let r = 100*Math.random();    ////////this shows how to generate a random no. only.
// console.log(r);





// let abhishek1=12;
// let abhishek2=21;

// let rand = abhishek1+(abhishek2-abhishek1)*Math.random();
// console.log(Math.round(rand));
