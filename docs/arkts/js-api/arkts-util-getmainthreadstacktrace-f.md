# getMainThreadStackTrace

## getMainThreadStackTrace

```TypeScript
function getMainThreadStackTrace(): string
```

获取主线程的栈追踪信息，最多返回 64 层调用帧。 该接口可能对主线程性能产生影响，建议仅在必要时使用，如日志记录、错误分析或调试场景。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 主线程的栈追踪信息。若主线程未处于执行 JavaScript 代码状态，则返回空字符串。 |

**Example**

```TypeScript
let stack = util.getMainThreadStackTrace();
console.info(stack);
// Obtain the stack trace information of the main thread.

```

