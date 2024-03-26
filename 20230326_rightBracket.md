##### 코딩테스트 연습 > 스택/큐 > 올바른 괄호 (Lv.2)

# 문제
## 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
- '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

## 제한사항
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

## 입출력 예
|s	      |answer
|---------|--------
|"()()"	  |true
|"(())()"	|true
|")()("	  |false
|"(()("	  |false

## 입출력 예 설명
### 입출력 예 #1,2,3,4
문제의 예시와 같습니다.

# 답안
```javascript
function solution(s){
    var answer = true;
    
    // 열려 있는 괄호의 수를 0으로 잡음
    var openedBracket = 0;

    // 문자열 s를 array화 함
    var sArray = s.split('');
    
    // 각각의 원소에 대하여
    sArray.forEach((element, index)=>{
        // 열린 괄호의 경우 => 맨 앞만 false 반환. 아닌 건 openBracket 카운트를 올려줌
        if(element == "(") {
            if(index != sArray.length - 1) openedBracket++
            else answer = false;
        }
        // 닫힌 괄호의 경우
        else{
            // 맨앞에 오면 false 반환
            if(index == 0) answer = false;
            // 열린 괄호가 떨어졌을 경우 false 반환
            else if(openedBracket == 0) answer = false;
            // 아닐 시 count 줄여줌
            else openedBracket--;
        }
    })
    
    // 열린 괄호가 남았으면 false 반환
    if(openedBracket != 0) answer = false;
     

    return answer;
}
```
# 유의점
1. 각각 경우의 수를 찾는 데 시간 걸림
2. array로 처리하는 것보다 count를 숫자로 처리하는 것이 압도적으로 성능면에서 우수함
