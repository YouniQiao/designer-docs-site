# getErrorString

## getErrorString

```TypeScript
function getErrorString(errno: number): string
```

获取系统错误码的详细信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.errnoToString

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
let result = util.getErrorString(errnum);
console.info("result = " + result);
// Output: result = operation not permitted

```

