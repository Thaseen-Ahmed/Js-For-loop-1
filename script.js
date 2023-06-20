
document.write("The Given Array is [1,2,3,4,5]");

let arr=[1,2,3,4,5];

let sum=0;
for(i=0;i<arr.length;i++){
    sum += arr[i];
}
document.write("<br>")
document.write("<br>")
document.write("<br>")
// document.write("<br>")
document.write("Sum Of The Given Array is " +sum)

document.write("<br>")
document.write("<br>")



let z= document.getElementById("hii");
z.innerHTML="<h2>Thii is Solution for othaner Problem</h2>";







document.write("<h1>This Is Solution for Another Problem</h1>")

let str=prompt("Enter a String you Want")

// for(i=0;i<str.length;i++){
//     document.write(i)
// }

for(let b of str){
    document.write(b);
    document.write("<br>");
    // console.log(b)
}