// 절단기 설정 가능한 높이 최댓값
// m: 필요한 나무 높이
// n: 나무의 수

const solution = (n, m, heightInfo) => {
    let answer = 0;
    let start = 0;
    let end = Math.max(...heightInfo);
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const sum = heightInfo.reduce((acc, cur) => {
            if (mid < cur) return acc + (cur - mid);
            else return acc;
        }, 0);
        if (sum >= m) {
            start = mid + 1;
            answer = mid;
        } else {
            end = mid - 1;
        }
    }
    return answer;
};

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input1.txt')
    .toString()
    .split('\n');
var [n, m] = input.shift().split(' ').map(Number);
var arr = input.shift().split(' ').map(Number);

console.log('출력1 값', solution(n, m, arr));

const input2 = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input2.txt')
    .toString()
    .split('\n');
var [n2, m2] = input2.shift().split(' ').map(Number);
var arr2 = input2.shift().split(' ').map(Number);

console.log('출력2 값', solution(n2, m2, arr2));
