// function hi (p){
// console.log(`Hiee ${p}`);
// }
// const arr = [3,5,8]
// arr.map(hi)

const students = ["Harry", "Ron", "Hermione", "Draco"]
students.map((stude) => {
    console.log(`hello ${stude}!`);
})

// returning value added to array 
const nums = [3, 5, 8, 9, 15, 18]
 const result = nums.map((num) => {
    if (num % 2 == 0) {
        return `${num} is even`
    }
    else{
        return `${num} is odd`
        
    }
})
console.log(result)
