/**
 * 1. Console.assert(condition?: boolean, ...data: any[]): void
 * Log level: Error
 * 断言
 */
const x = 5;
const y = 3;
const reason1 = 'x is expected to be less than y';
const reason2 = 'x is expected to be greater than y';
console.assert(x < y, {x, y, reason1});
// Assertion failed: {x: 5, y: 3, reason1: "x is expected to be less than y"}
console.assert(x > y, {x, y, reason2});
// Assertion failed: {x: 5, y: 3, reason2: "x is expected to be less than y"}

/**
 * 2. Console.clear(): void
 * 清空控制台，如果设置中启用Preserve log, 则console.clear()失效。
 */
console.clear();
// Console was cleared

/**
 * 3. Console.count(label?: string): void
 * Log level: Info
 * 计数
 */
console.count();
console.count('coffee');
console.count();
console.count();
// default: 1
// coffee: 1
// default: 2
// default: 3

/**
 * 4. Console.countReset(label?: string): void
 * 计数重置
 */
console.countReset();

/**
 * 5. Console.debug(...data: any[]): void
 * Log level: Verbose
 * 与console.log()用法相同，信息级别不同
 */
console.debug('debug');

/**
 * 6. Console.dir(item?: any, options?: any): void
 * Log level: Info
 * 打印对象的JSON表达式
 */
console.dir(document.head);

/**
 * 7. Console.dir(item?: any, options?: any): void
 * Log level: Info
 * 打印对象的JSON表达式
 */
console.dirxml(document.head);