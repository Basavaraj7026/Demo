var value = document.querySelector("aside")
console.log(value)
    // console.log(value.innerText);
    // console.log(value.textContent);
    // console.log("hello world")
    // var para = document.createElement("p");
    // console.log(para)
    // para.innerText = "hii";
    // document.body.appendChild(para)

var ol = document.createElement("ol");
var l1 = document.createElement("li");
l1.innerText = "List 1";
var l2 = document.createElement("li");
l2.innerText = "List 2";
var l3 = document.createElement("li");
l3.innerText = "List 3";
var l4 = document.createElement("li");
l4.innerText = "List 4";
var l5 = document.createElement("li");
l5.innerText = "List 5";
var l6 = document.createElement("li");
l6.innerText = "List 6";
var l7 = document.createElement("li");
l7.innerText = "List 7";


document.body.appendChild(ol);
// ol.appendChild(l1)
// ol.appendChild(l2)
// ol.appendChild(l3)
// ol.appendChild(l4)
// ol.appendChild(l5)
// ol.appendChild(l6)
// ol.appendChild(l7)

ol.append(l1, l2, l3, l4, l5, l6, l7)