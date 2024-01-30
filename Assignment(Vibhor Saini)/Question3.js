//  ==================================  Answer 1 ===================================

let number = 8046957321;

// Convert the number to an array 
let arr = Array.from(String(number), Number);

// Here i apply bubble sort algorithm.
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements if they are in the wrong order
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

