##### 프로그래머스 코딩테스트 연습 > 연습문제 > 행렬의 덧셈(Lv.1)
# 문제
## 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

## 제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
## 입출력 예
|arr1	          |arr2	          |return
|---------------|---------------|---------------
|[[1,2],[2,3]]	|[[3,4],[5,6]]	|[[4,6],[7,9]]
|[[1],[2]]	    |[[3],[4]]	    |[[4],[6]]

# 풀이
```javascript
function solution(arr1, arr2) {
    var answer = [];
    
    // 처음 array의 각 원소(속 안의 array)마다
    arr1.forEach((innerArr, innerIndex)=>{
        // 내부에서 값을 더할 array를 선언함
        let plusedArray = [];
        // 내부의 array마다
        innerArr.forEach((element, elementIndex)=>{
            // arr2의 해당 부분의 원소를 찾아 더해줌
            let plusedElement = element + arr2[innerIndex][elementIndex];
            // 값을 더할 array에 더함 
            plusedArray.push(plusedElement)
        })
        answer.push(plusedArray)
    })
    return answer;
}
```
