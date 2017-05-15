'use strict';
const memo = new Map(); // メモ化による高速化
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }

    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40; // フィボナッチ数列を40番目まで出力する
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}