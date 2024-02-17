var twoSum = function(nums, target) {
    const numberIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remainingValue = target - nums[i];
        if(numberIndex.has(remainingValue)){
            return [numberIndex.get(remainingValue),i];
        } 
        numberIndex.set(nums[i],i)
    }
    return [];
};