# callbackWrapper

## callbackWrapper

```TypeScript
function callbackWrapper(original: Function): (err: Object, value: Object) => void
```

回调一个异步函数。在回调中，第一个参数表示拒绝的原因（如果 promise 已经 resolved，该值为 **null**），第二个 参数表示 resolved 的值。 > **NOTE** > > - **original** 必须是异步函数。如果传入非异步函数，该函数不会被拦截，但会显示错误信息 > "callbackWrapper: The type of Parameter must be AsyncFunction"。 > > - 本接口将返回 promise 的异步函数转换为错误优先的回调函数。本接口返回的函数以回调作为其第二个输入参数。调用该方法时， > 会先执行原函数。当 **original** 的 promise 返回 **resolve** 时，回调函数的第一个参数为 **null**，第二个参数为 > **resolve** 的值。当 **original** 的 promise 返回 **reject** 时，回调函数的第一个参数为错误对象，第二个参数为 > **null**。当 **original** 是一个无入参的函数时，本接口返回的函数的第一个输入参数必须是无效的占位参数。

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| original | Function | Yes | 异步函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| (err: Object, value: Object) => void | 回调函数，其中第一个参数 err 表示拒绝的原因（如果 promise 已经 resolved，该值为  null），第二个参数 value 表示 resolved 的值。 |

**Example**

```TypeScript
async function fn(input: string) {
  return input;
}
let cb = util.callbackWrapper(fn);
cb('hello world', (err : Object, ret : string) => {
  if (err) throw new Error;
  console.info(ret);
});
// Output: hello world

```

