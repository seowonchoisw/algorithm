##### 프로그래머스 코딩테스트 연습 > 연습문제 > 서울에서 김서방 찾기


# 문제
## 문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

## 제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

## 입출력 예
|seoul          	|return
|-----------------|----------------------
|["Jane", "Kim"]	|"김서방은 1에 있다"

# 답안
```javascript
function solution(seoul) {
    var answer = '';
    
    seoul.forEach((element, index)=>{
        if(element == "Kim") answer = "김서방은 "+index+"에 있다"
    })
    return answer;
}
```

# 참고 풀이
## Array.prototype.indexOf(element) 메서드
열에서 **주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환**하고, 찾을 수 없는 경우 -1을 반환

## 해당 풀이에의 적용
```javascript
function findKim(seoul){
  var idx = seoul.indexOf('Kim');

  return "김서방은 " + idx + "에 있다";
}
```
