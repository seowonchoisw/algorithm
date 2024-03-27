##### 코딩테스트 연습 > 연습문제 > 이상한 문자 만들기(Lv.1)

# 문제
## 문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

## 제한 사항
- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

## 입출력 예
|s	              |return
|-----------------|--------------------
"try hello world"	|"TrY HeLlO WoRlD"
## 입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

# 답안
```javascript
function solution(s) {
    var answer = '';
    
    // 문자열 s를 array 단위로 쪼개줌
    var sArray = s.split(' ')
    
    // 쪼개진 각 단어마다
    sArray.forEach((word, index)=>{
        // 각 단어를 알파벳 단위의 배열로 쪼개줌
        var wordArray = word.split('')
        // 짝수/홀수 index에 따라 조건절 처리
        wordArray.forEach((element, index)=>{
            if(index % 2 == 0) answer += element.toUpperCase();
            else answer += element.toLowerCase();
        })
        
        // 맨 마지막 문자가 아니라면 공백을 더해줌
        if(index != sArray.length-1){
            answer += ' '
        }
    })
    return answer;
}
```

# 비고
- 삼항연산자를 쓰면 풀이가 더 짧아진다고 함 
- 아래와 같은 느낌으로 정규식을 통해 한 줄로 풀이할 수 있으나, 속도는 느려진다고 함.
```javascript
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
```
