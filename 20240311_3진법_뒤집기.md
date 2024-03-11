# 문제

## 문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

## 입출력 예
| n	|result|
|---|------|
|45	|7     |
|125|229   |

### 입출력 예 설명
#### 입출력 예 #1

답을 도출하는 과정은 다음과 같습니다.
|n (10진법)|n (3진법)|앞뒤 반전(3진법)|	10진법으로 표현
|----------|---------|---------------|--------------------
|45        |1200	 |0021	         |7

따라서 7을 return 해야 합니다.

#### 입출력 예 #2

답을 도출하는 과정은 다음과 같습니다.
|n (10진법)|n (3진법)|앞뒤 반전(3진법)|	10진법으로 표현
|----------|---------|---------------|--------------------
|125       |11122    |22111          |229

따라서 229를 return 해야 합니다.

# 답안
```javascript
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


```
