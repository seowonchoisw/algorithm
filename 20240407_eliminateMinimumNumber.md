##### 프로그래머스 코딩테스트 연습 > 연습문제 > 제일 작은 수 제거하기(Lv.1)

# 문제
## 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

## 제한 조건
- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

## 입출력 예
|arr	      |return
|-----------|-----------
|[4,3,2,1]	|[4,3,2]
|[10]	      |[-1]

# 답안
```javascript
function solution(arr) {
    var answer = [];
    // 배열의 길이가 1인 경우: 리턴하려는 배열이 빈 배열이 됨 -> -1을 채워줌
    if(arr.length == 1) return [-1]
    // 일반적일 경우
    let originalArr = [...arr]
    // 최소값 변수 선언
    let minElement;
    arr.forEach((element)=>{
        // 값이 없다면 => 그냥 할당해 줌
        if(minElement == undefined) minElement = element  
        // 이전 값과 비교 => 최소값 변수에 작은 것을 할당함
        if(minElement > element) minElement = element
    })
    // 이 최소값이 배제된 배열을 정답으로 반환함
    answer = arr.filter((element)=> element !== minElement)
    
    return answer;
}
```
