 var d = new Date();
 console.log(d)

 var year = d.getFullYear();
 console.log(year)

 var mounth = d.getMonth();
 console.log(mounth)

 var date = d.getDate();
 console.log(date)

 var Hours = d.getHours();
 console.log(Hours);

 var Minutes = d.getMinutes();
 console.log(Minutes)

 var Second = d.getSeconds();
 console.log(Second)

 var Mill = d.getMilliseconds();
 console.log(Mill);

 var Day = d.getDay();
 console.log("Day :" + Day);

 var marr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 var darr = ["sunday", "monday", "tuesday", "wednesday", "thursday", " friday", "saturday", ];
 console.log(`${year}/${marr[mounth]},${date},${darr[Day]}`)

 function printDate() {

     var d = new Date();

 }
 setInterval(() => {
     printDate();
 }, 1000);

 console.log(Math.PI);
 console.log(Math.sin(0));
 console.log(Math.cos(0));
 //  console.log(Math.tan(0) + "\n" + Math.ceil(12.01 + "\n" + Math.floor(12.9999) + "\n" + Math.round(12.9999) + "\n" + Math.random()));
 console.log(Math.tan(0));
 console.log(Math.ceil(12.01));
 console.log(Math.cos(0));
 console.log(Math.floor(12.9999))
 console.log(Math.round(12.9999))
 console.log("Min" + Math.min(12, 34, 45, 742));
 console.log("MAX" + Math.max(12, 34, 45, 742));
 console.log(parseInt(Math.random() * 10000));

 var random = parseInt(Math.random() * (10000));
 alert("Your Otp :" + random);
 var otp = prompt("Enter Yor OTP :")
 var ans = otp == random ? alert("Correct") : alert("No");