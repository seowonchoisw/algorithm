##### 코딩테스트 연습 > 연습문제 > 직사각형 별찍기

# 문제
## 문제 설명
- 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
- 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

## 제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

## 예시
### 입력
```javascript
5 3
```
### 출력
```javascript
*****
*****
*****
```
# 답안
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    // 입력 데이터를 변수로 가져오기 위해 가로, 세로 값을 array로 split함 
    const n = data.split(" ");
    // 가로와 세로 값을 선언
    const col = Number(n[0]), row = Number(n[1]);
    // 각 row마다 줄 바꿔주기 위해 console은 row 단위로 찍음
    for(let i = 0 ; i < row ; i++){
        let oneLine = "";
        // 각 가로 길이마다 별 출력
        for(let j = 0 ; j < col; j++){
            oneLine += "*"   
        }
        console.log(oneLine)
    }
});
```
# 비고
String.prototype.repeat() 메서드: 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
## 예제
```javascript
str.repeat(count);
```
=> str을 count만큼 반복한 문자열 출력됨
## 해당 문제에 적용한 풀이
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
```
