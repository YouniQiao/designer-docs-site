# is64Bit

## is64Bit

```TypeScript
function is64Bit(): boolean
```

检查运行环境是否为 64 位。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回判断结果。如果运行环境是 64 位则返回 true；  否则返回 false。 |

**Example**

```TypeScript
let result = process.is64Bit();

```

