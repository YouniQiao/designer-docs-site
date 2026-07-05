# printf

## printf

```TypeScript
function printf(format: string, ...args: Object[]): string
```

通过替换字符串中的占位符进行字符串格式化。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.format

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| format | string | Yes | 格式字符串。 |
| args | Object[] | Yes | 用于替换 format 中占位符的数据。如果传入 null，默认返回第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 包含格式化值的字符串。 |

**Example**

```TypeScript
let res = util.printf("%s", "hello world!");
console.info(res);
// Output: hello world!

```

