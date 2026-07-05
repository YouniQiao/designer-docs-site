# getStartRealtime

## getStartRealtime

```TypeScript
function getStartRealtime(): number
```

获取系统启动到进程启动的实时时间（以毫秒为单位，不包含系统休眠时间）。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回经过的实时时间。单位：毫秒。 |

**Example**

```TypeScript
let realtime = process.getStartRealtime();

```

