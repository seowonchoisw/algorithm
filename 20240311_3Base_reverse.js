
let recordString = [];

function solution(n) {
    var answer = 0;
    // 배열 초기화
    recordString = [];
    // 3진법으로 변환함
    makeBaseThree(n)
    // 배열 원소를 reverse함
    let reversedRecord = recordString.reverse();
    // 10진법으로 변환함
    answer = makeBaseTen(reversedRecord);
    return answer;
}

// 3진법 변환 함수
function makeBaseThree(n){
    var quote = Math.floor(n / 3);
    var remainder = n % 3;
    recordString.unshift(remainder);
    
    if(quote >= 1) makeBaseThree(quote);
}

// 10진법 변환 함수
function makeBaseTen(nArray){
    var length = nArray.length;
    let baseTen = 0;
    for(let i = 0 ; i < length; i++){
        baseTen += nArray[i] * (3**(length-1-i))
    }
    
    return baseTen;
}
