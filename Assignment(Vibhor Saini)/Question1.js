//  ==================================  Answer 1 ===================================

const arr = [-2,5,3,-8,10,-4];

function SumOfPositiveNumbers(arr) {
    let sum = 0;

    // for loop for itrate every elements of array
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum +  arr[i];
        }
    }
    return sum;
}

const result = SumOfPositiveNumbers(arr);

console.log(result); 



