##### 프로그래머스 코딩테스트 연습 > 코딩테스트 입문 > 한 번만 등장한 문자

# 문제
## 문제 설명
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

## 제한사항
0 < s의 길이 < 1,000
s는 소문자로만 이루어져 있습니다.

## 입출력 예
|s	          |result
|-------------|---------
|"abcabcadc"	|"d"
|"abdc"	      |"abcd"
|"hello"	    |"eho"


## 입출력 예 설명
### 입출력 예 #1
- "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.

### 입출력 예 #2
- "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.

### 입출력 예 #3
- "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.

# 답안
```javascript
function solution(s) {
    var answer = '';
    
    let sArray = s.split('');
    
    // 겹치는 알파벳이 없는, 들어가는 알파벳을 한 번만 나열하는  array 변수 생성
    let sNoDupleArray = [...new Set(sArray)];
    
    // 중복 없는 array를 순환하며 진행
    // 해당 단계에서 알파벳 순으로 정리함
    sNoDupleArray.sort().forEach((noDupleElement)=>{
        let count = 0;
        // sArray의 모든 알파벳을 각 중복 없는 array의 알파벳과 비교 => count함
        sArray.forEach((element)=>{
            if(element == noDupleElement) count++
        })
        // 1개 해당된다면 => 문자열에 더해줌
        if(count == 1) answer += noDupleElement;
    })
    
    return answer;
}
```
