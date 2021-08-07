// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function sum3(nums){
    sortedArr = [];
    newArr = [];
    for(let i = 0; i <nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] > nums[j])
        }
    }
}

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]


function sortIt(arr){
    sorted = false;
    while(!sorted){
        sorted = true;
        for(var i = 1; i < arr.length; i++){
            if(arr[i-1]>arr[i]){
                sorted = false;
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(sortIt([12,10,15,11,14,13,16]));

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

// console.log(bubbleSort([12,10,15,11,14,13,16]));


function sum3(nums){
    nums = bubbleSort(nums);
    newArr =[];
    for(let i = 0; i < nums.length; i++){
        j = i + 1;
        k = nums.length-i;
        if(nums[i] + nums[j] + nums[k] == 0){
            newArr.push([nums[i],nums[j],nums[k]])
        }
    }
    return newArr
}

console.log(sum3([-1,0,1,2,-1,-4]))
console.log(sum3([]))
console.log(sum3([0]))