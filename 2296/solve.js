const dpFunc = (n, v) => {
    let ans = 0;
    let DP = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        DP[i] = v[i][2];
        for (let j = 0; j < i; j++) {
            if (v[j][1] < v[i][1]) {
                DP[i] = Math.max(DP[i], DP[j] + v[i][2]);
            }
        }
    }
    ans = Math.max(...DP);
    return ans;
};
const solution = (n, info) => {
    const upArr = info.map((i) => i).sort((a, b) => a[0] - b[0]);
    const downArr = info.map((i) => i).sort((a, b) => b[0] - a[0]);
    return Math.max(dpFunc(n, upArr), dpFunc(n, downArr));
};

const main = () => {
    const input = require('fs')
        .readFileSync(
            process.platform === 'linux' ? '/dev/stdin' : './2296/input.txt'
        )
        .toString()
        .trim()
        .split('\n');

    const n = parseInt(input.shift());
    const info = input.map((s) => s.split(' ').map((b) => +b));

    console.log('2296번');
    console.log(solution(n, info));
};

module.exports = {
    main,
};
