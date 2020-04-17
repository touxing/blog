/**
 * 递归斐波那契数列
 */

function fibonacci(n) {
  // 递归终止条件
  if (n == 1 || n == 2) return 1;

  // 添加缓存优化重复计算
  if (!this.cacheMap) {
    this.cacheMap = new Map();
  }
  if (this.cacheMap.has(n)) return this.cacheMap.get(n);
  // 注意递归深度大，爆栈问题
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  this.cacheMap.set(n, result);
  return result;
}

console.log("n=10, fibonacci =", fibonacci(10));
