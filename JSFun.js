var multiTag = document.querySelectorAll("p");
console.log(multiTag);
multiTag[0].style.background = "red";


function ADD() {
    for (let i = 0; i < multiTag.length; i++) {

        if (i % 2 == 0) {

            multiTag[i].style.background = "green";
        } else {
            multiTag[i].style.background = "red";
        }
    }
}

var arr = ["red", "green", "pink", "black", "aqua", "yellow", "  cyan", "white", 'black']
var btn = document.querySelector("button")
var num = 0

btn.addEventListener("click", () => {
    if (num > arr.length - 1) {
        num = 0
    }
    document.body.style.background = arr[num]
    console.log(" i was clicked");
    num++
});