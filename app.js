

// Nested array with spread operator

let arr1 = [ 

arr2 =["red", "Blue", "Green", "yellow", "purple" ]

]
let arr3 = [...arr2,"orange", "pink", "cornflourblue"]
let arr4 = [...arr2,"lightblue","Darkcyan",...arr3]

console.log(arr1)
console.log(arr3)
console.log(arr4)


// Nested object with spread operator


    fullname = {
       firstname:"Muhammad",
       lastname:"siddiqui"
    },
    Education = { 
        Matric:"Computer Science",
        inter:"Science general"
    }
    age = {
       DOB:"23/10/2002",
    },
    number ={
        cellno:"034465284068",
    },

 
    person = {...fullname,...Education,...age,...number}

    console.log(person)













