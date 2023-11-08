var btn = document.querySelector("button")
var aside = document.querySelector("aside")
var name1 = document.querySelector("#name1")
var num1 = document.querySelector("#num")
var btn = document.querySelector("button")
var tab = document.querySelector("table");



var num = 0
    // btn.addEventListener("click", () => {

//     var nameval = name1.value;
//     var numval = num1.value;

//     console.log(nameval, numval)
//     num++;

//     var tr1 = document.createElement("tr");
//     var td1 = document.createElement("td");
//     var td2 = document.createElement("td");
//     var td3 = document.createElement("td");
// })

btn.addEventListener = ("click", () => {

    var namval = name1.value;
    var numval = numval.value;

    console.log(namval, numval);
    num++;

    tab.innerHTML += `
 <tr>
    <td>${num} </td>
    <td>${namval} </td>
    <td>${numval} </td>
<tr>
`

})