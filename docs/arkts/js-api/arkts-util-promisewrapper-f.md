# promiseWrapper

## promiseWrapper

```TypeScript
function promiseWrapper(original: (err: Object, value: Object) => void): Object
```

接收一个使用错误优先回调模式的函数（即最后一个参数为 `(err, value) => callback`），并通过 promise 返回结果。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.promisify

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| original | (err: Object, value: Object) => void | Yes | 异步函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Object | 错误优先风格（即最后一个参数为 (err, value) => ... ）的 promise。 |

