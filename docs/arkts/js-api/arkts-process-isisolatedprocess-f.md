# isIsolatedProcess

## isIsolatedProcess

```TypeScript
function isIsolatedProcess(): boolean
```

检查进程是否已被隔离。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回判断结果。如果进程被隔离则返回 true；否则，  返回 false。 |

**Example**

```TypeScript
let result = process.isIsolatedProcess();

```

