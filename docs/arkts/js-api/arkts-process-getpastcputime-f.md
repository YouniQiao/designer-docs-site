# getPastCpuTime

## getPastCpuTime

```TypeScript
function getPastCpuTime(): number
```

获取进程启动到当前时间的 CPU 时间（以毫秒为单位）。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回经过的 CPU 时间。单位：毫秒。 |

**Example**

```TypeScript
let result = process.getPastCpuTime();

```

