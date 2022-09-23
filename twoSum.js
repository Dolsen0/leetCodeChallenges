const nums = [3, 6, 1, 5, 7, 2, 7 ,2, 5];
const target = 8;

var twoSum = function(nums, target) {
    
    let result = []
    for(let i = 0; i < nums.length; i++){
        for(let k = i + 1; k < nums.length; k++){
            if( nums[i] + nums[k] == target){
                result.push([i])
                result.push([k])
                return result
            }
        }
    }
    
};

console.log(twoSum(nums, target))