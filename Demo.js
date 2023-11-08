let First=Number(prompt("First Number"));
let Second=Number(prompt("Second Number"));
let Method=prompt("Method")

if(Method=="Add"){
let sum=First+Second;
alert("The sum of "+First+"+"+Second+"="+sum);
}

else if(Method=="SUB" || Method=="sub"){
let sum=First-Second;
alert("The sub of "+First+"-"+Second+"="+sum);
}

else if(Method=="MUL"|| Method=="mul"){
    let sum=First*Second;
    alert("The sub of "+First+"*"+Second+"="+sum);
}

else if(Method=="DIV"|| Method=="div"){
    let sum=First/Second;
    alert("The sub of "+First+"/"+Second+"="+sum);
}
else{
    alert("Enter thr Valid Method...");
}

var Test={
Name:"unknown",
qlf:"Demo",
age:"21",
skills:function(){
    console.log("Html"+"\n"+"Css"+"\n"+"JS");
}
}
 console.log(Test);
Test.skills();































