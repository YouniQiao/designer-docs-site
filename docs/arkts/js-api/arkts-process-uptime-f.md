# uptime

## uptime

```TypeScript
function uptime(): number
```

获取当前系统已运行的时间（以秒为单位）。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前系统已运行的时间。单位：秒。 |

**Example**

```TypeScript
let time = process.uptime();

```

