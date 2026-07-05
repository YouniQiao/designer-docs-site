# errnoToString

## errnoToString

```TypeScript
function errnoToString(errno: number): string
```

获取系统错误码的详细信息。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errno | number | Yes | 生成的错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 错误码的详细信息。 |

**Example**

```TypeScript
let errnum = -1; // -1 is a system error code.
let result = util.errnoToString(errnum);
console.info("result = " + result);
// Output: result = operation not permitted

```

