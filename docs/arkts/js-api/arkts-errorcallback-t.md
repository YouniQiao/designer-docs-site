# ErrorCallback

```TypeScript
type ErrorCallback = (err: ErrorEvent) => void
```

表示异常回调类型。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | ErrorEvent | Yes | 错误事件类，  表示Worker执行过程中出现的异常信息。 |

