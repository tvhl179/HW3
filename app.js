// Ex 1
// Cách 1
// let a = 6, b = 9;
// [a, b] = [b, a];
// console.log(a,b);

// Cách 2
// let a = 6, b = 9
// c = a, a = b, b = c;
// console.log(a,b);



// Ex 2
// let a = 'Hello beauty there';
// let s = a.split(' ');
// console.log(s);



// Ex 3
// const a = [4, 5, 7, -8];
// console.log(...a);



// Ex 4
// let items = ['Jeans','T-Shirts','Socks'];
// let character = (prompt("Hi there, what do you want? (C, R, U, D) "));
//     while (true) {
//         if (character == 'r')
//         {
//         console.log(`The current items are: `);
//         for (i=0; i<=items.length; i++)
        
//             console.log(`${i+1}. ${items[i]}`)
//         } else if (character == "c") {
//             let newItem = prompt("Enter the name of the new item")
//             alert("Done")
//             items.push(newItem)
//         } else if (character == "u") {
//             let newPosi = Number(prompt("Enter the position you want to update"))
//             let newName = prompt("Enter a new name")
//             alert("Done")
//             items[newPosi -1] = newName
//         } else if (character == "d") {
//             let del = Number(prompt("Enter the position you want to delete"))
//             alert("Done")
//             items.splice(del -1, 1)
//         } else {
//             alert("This command is not supported")
//             break
//         } 
//     }




// Ex 5
// let num = prompt("Enter a sequence of numbers, seperated by commas (,):");
// let numList = num.split(",").map(Number);
// let s = 0;
// for (i = 0; i < numList.length; i++) 
// {
//     s += numList[i]
// }
// alert(`The total of numbers in your sequence is : ${s}`);



// Ex 6
// let num = prompt("Enter a sequence of numbers, seperated by commas (,):");
// let numList = num.split(",");
// let min = Number(numList[0]);
// for (let i = 0; i < numList.length; i++)
// {
//     if (numList[i] < min)
//     {
//         min = numList[i];
//     }
// }
// alert(`The smallest number is: ${min}`);



// Ex 9
setshape("rocket")
color("cyan")
fd(100)
rt(90)
fd(100)
rt(90)
fd(100)
rt(90)
fd(100)
rt(90)
color("purple")
fd(75)
rt(90)
fd(75)
rt(90)
fd(75)
rt(90)
fd(75)
rt(90)
color("blue")
fd(50)
rt(90)
fd(50)
rt(90)
fd(50)
rt(90)
fd(50)
rt(90)
color("gray")
fd(25)
rt(90)
fd(25)
rt(90)
fd(25)
rt(90)
fd(25)
rt(90)


