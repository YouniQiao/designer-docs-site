# getFoldStatus

## getFoldStatus

```TypeScript
function getFoldStatus(): FoldStatus
```

获取可折叠设备当前的折叠状态。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FoldStatus | FoldStatus对象，返回当前可折叠设备的折叠状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
let data: display.FoldStatus = display.getFoldStatus();
console.info(`Succeeded in obtaining fold status. Data: ${data}`);

```

