# 문제
## 문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

## 입출력 예
|numbers	    |result
|-------------|----------------
|[2,1,3,4,1]	|[2,3,4,5,6,7]
|[5,0,2,7]	  |[2,5,7,9,12]


## 입출력 예 설명
### 입출력 예 #1
- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

### 입출력 예 #2
- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.

# 풀이
```javascript
function solution(numbers) {
    var answer = [];
    
    // 기준을 i로 잡음
    for(let i = 0 ; i < numbers.length; i++){
        // j번째 것과의 합 => i와 j가 다르다면 원소 배열에 포함시켜 줌(중복 포함해서 모든 합 구함)
        for (let j = 0 ; j < numbers.length ; j++){
            if(i != j) answer.push(numbers[i] + numbers[j])
        }
    }
    // 중복되는 것을 다 제해줌
    answer = Array.from(new Set(answer)).sort((a, b)=> a-b)
    
    return answer;
}
```

중복 제거를 set로 해결하면 쉽게 해결할 수 있었다. 대신 set를 Array로 바꾸는 과정이 조금 헷갈려 풀이에 시간이 걸림. 
