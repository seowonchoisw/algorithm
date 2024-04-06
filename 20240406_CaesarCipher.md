# 문제
## 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

## 제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

## 입출력 예
|s	      |n	|result
|---------|---|-------
|"AB"	    |1	|"BC"
|"z"	    |1	|"a"
|"a B z"	|4	|"e F d"

# 답안
```javascript
function solution(s, n) {
    var answer = '';
    // s를 Array단위로 쪼개줌
    var sArray = s.split("")
    // s의 모든 원소마다
    sArray.forEach((sElement, index)=>{
        // 아스키 코드로 바꿔줌
        var originalCode = sElement.charCodeAt()
        // 아스키 코드가 대문자 범주인 경우
        if(originalCode >= 65 && originalCode <= 90){
            var newCode = sElement.charCodeAt()+n
            // "Z"를 넘어갈 경우 => 다시 "A"부터 시작하도록 지정
            if(newCode > 90){
                newCode = newCode - 26
            }
            answer += String.fromCharCode(newCode)
        }
        // 아스키 코드가 소문자 범주인 경우
        else if(originalCode >= 97 && originalCode <= 122){
            var newCode = sElement.charCodeAt()+n
            // "z"를 넘어갈 경우 => 다시 "a"부터 시작하도록 지정
            if(newCode > 122){
                newCode = newCode - 26
            }
            answer += String.fromCharCode(newCode)
        }
        // 알파벳이 아닐 경우 -> 보통 문자 넣어줌
        else answer += String.fromCharCode(originalCode)
    
    })

    return answer;
}
```
