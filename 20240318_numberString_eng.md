코딩테스트 연습 > 2021년 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어(Lv.1)

# 문제
## 문제 설명

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

|숫자	|영단어
|-----|------
|0	  |zero
|1	  |one
|2	  |two
|3	  |three
|4	  |four
|5	  |five
|6	  |six
|7	  |seven
|8	  |eight
|9	  |nine

## 제한사항
- 1 ≤ s의 길이 ≤ 50
- s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

## 입출력 예
|s	                |result
|-------------------|------
|"one4seveneight"	  |1478
|"23four5six7"	    |234567
|"2three45sixseven"	|234567
|"123"	            |123

## 입출력 예 설명
### 입출력 예 #1

문제 예시와 같습니다.

### 입출력 예 #2

문제 예시와 같습니다.

### 입출력 예 #3

"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.

### 입출력 예 #4

s에는 영단어로 바뀐 부분이 없습니다.

## 제한시간 안내
정확성 테스트 : 10초

# 풀이(오답!)
```javascript
  function solution(s) {
      let answer = s.replace('one', '1')
                  .replace('two', '2')
                  .replace('three', '3')
                  .replace('four', '4')
                  .replace('five', '5')
                  .replace('six', '6')
                  .replace('seven', '7')
                  .replace('eight', '8')
                  .replace('nine', '9')
                  .replace('zero', '0')
      
      return Number(answer);
  }
```


해당 풀이가 실패하는 이유를 아직도 알지 못함

# 모범답안
```javascript
  function solution(s) {
      // 숫자에 대한 문자열을 배열로 넣음
      let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      var answer = s;
  
      // 각 숫자 문자열마다
      for(let i = 0; i < numbers.length; i++) {
          // 배열에 언급된 문자열이 나올 경우 이걸 기준으로 잘라 줌
          let arr = answer.split(numbers[i]);
          // 해당 문자열에 대체된 숫자를 붙여줌
          answer = arr.join(i);
          
      }
      
      return Number(answer);
  }
```
