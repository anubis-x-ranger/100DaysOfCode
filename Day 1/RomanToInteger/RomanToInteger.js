/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum=0;
    let rtoi={
        'I':1, 
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var str=s.split('');
    for(let i=0;i<str.length;i++){
        if(rtoi[str[i]]<rtoi[str[i+1]]){
            sum+=rtoi[str[i+1]]-rtoi[str[i]];
            i++;
        }
        else{
            sum+=rtoi[str[i]];
        }
    }
    return sum
};