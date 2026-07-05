# promisify

## promisify

```TypeScript
function promisify(original: (err: Object, value: Object) => void): Function
```

接收一个使用错误优先回调模式的函数（即最后一个参数为 `(err, value) => callback`），并通过 promise 返回结果。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| original | (err: Object, value: Object) => void | Yes | 函数，其中第一个参数 err 表示拒绝的原因（如果 promise 已经 resolved，该值为  null），第二个参数 value 表示 resolved 的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Function | 返回一个返回 promises 的函数。[since 9 - 11]  @returns { Function } Promise 函数。[since 10] |

**Example**

```TypeScript
async function fn() {
  return 'hello world';
}
const addCall = util.promisify(util.callbackWrapper(fn));
(async () => {
  try {
    let res: string = await addCall();
    console.info(res);
    // Output: hello world
  } catch (err) {
    console.info(err);
  }
})();

```

