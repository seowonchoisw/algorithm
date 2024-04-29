##### 프로그래머스 코딩테스트 연습 > 연습문제 > 최대공약수와 최소공배수(Lv.1)

# 문제
## 문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

## 제한 사항
두 수는 1이상 1000000이하의 자연수입니다.

## 입출력 예
|n	|m	|return
|---|---|--------
|3	12	[3, 12]
|2	5	[1, 10]

## 입출력 예 설명
### 입출력 예 #1
위의 설명과 같습니다.

### 입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.


# 답안

```javascript
function solution(n, m) {
    // 최대공약수 구하기
    var gcd = makeGcd(n, m)
    // 최소공배수 구하기
    var lcm = makeLcm(gcd, n, m)
    return [gcd, lcm];
}

// 최대공약수 구하기
function makeGcd(n, m){
    let gcd = 1;
    // 1부터 둘 중 작은 수까지를 순환 => 둘다 나눠떨어지면 최대공약수 update
    for(let i = 1 ; i <= n && i <= m ; i++){
        if(n % i == 0 && m % i == 0) gcd = i;
    }
    return gcd;
}

// 최소공배수 구하기
function makeLcm(gcd, n, m){
    // 각 수를 최대공약수로 나눈 몫 구함
    let shareN = Math.floor(n/gcd)
    let shareM = Math.floor(m/gcd)
    // 해당 몫들과 최대공약수를 곱함
    return gcd*shareN*shareM
}
```
