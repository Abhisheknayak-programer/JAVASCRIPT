//                                         DATE AND TiME IN JAVASCRIPT



// // Q-1-->
// // Make A Clock Display In The Website Page



// function time() {
//  let  now = new Date();
//     document.getElementById('timer').innerHTML = now;
// }

// setInterval(time, 1000);






// // 2




// function recent_time() {
//     let now2 = new Date();
//     document.getElementById('timer').innerHTML = now2;
// }

// let a = setInterval(recent_time,1000);
// console.log(a);




// // 3




// function time_manufactured(){
//     let old_time = new Date(999999999999);
//     document.getElementById('timer').innerHTML = old_time;
// }

// let b =setInterval(time_manufactured,1000);








//                  DATE AND TIME ACTUAL PARAMETRS 



// // 4


// let newdate = new Date();
// console.log(newdate);



// let now = new Date(0);
// console.log(now);



// let now2 = new Date(100000);
// console.log(now2);



// let a = new Date("2029-08-17");
// console.log(a);



let format_of_date = new Date(3200,7,17,07,06,01);
console.log(format_of_date);


// let year = format_of_date.getFullYear();
// console.log("THE YEAR WILL BE",year);

// let month  = format_of_date.getMonth();
// console.log("THE MONTH WILL BE ",month);

// let hour = format_of_date.getHours();
// console.log("THE hour WILL BE",hour);

// let minutes = format_of_date.getMinutes();
// console.log("THE minutes WILL BE",minutes);

// let second = format_of_date.getSeconds();
// console.log("THE second WILL BE",second);


// let UTF_milliseconds_will_be = format_of_date.getUTCMilliseconds();
// console.log("THE UTF milliseconds will be WILL BE",UTF_milliseconds_will_be);


// let day  = format_of_date.getDay();
// console.log("THE day WILL BE",day);


// let date  = format_of_date.getDate();
// console.log("THE date WILL BE",date);







// //                                   SETTING A DATE


// let a = format_of_date.setDate(09); 
// console.log(a);

// let b = format_of_date.setFullYear(2020);
// console.log(b);

// let c = format_of_date.setMonth(6);
// console.log(c);

// let d = format_of_date.setHours(12); 
// console.log(d);

// let e = format_of_date.setSeconds(18);
// console.log(e);

// let f = format_of_date.setMinutes(15);
// console.log(f);

// console.log(format_of_date);        //    its my brothers birthday date  Adarsh Nayak










//        SETTING A PROPER TIME INSIDE THE WEBPAGE 


function updatetime(){
    timer.innerHTML = new Date();
}
setInterval(updatetime,1000);