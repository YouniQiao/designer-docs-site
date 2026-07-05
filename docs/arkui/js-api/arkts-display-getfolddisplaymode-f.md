# getFoldDisplayMode

## getFoldDisplayMode

```TypeScript
function getFoldDisplayMode(): FoldDisplayMode
```

获取可折叠设备当前的显示模式。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FoldDisplayMode | FoldDisplayMode对象，返回可折叠设备当前的显示模式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
let data: display.FoldDisplayMode = display.getFoldDisplayMode();
console.info(`Succeeded in obtaining fold display mode. Data: ${data}`);

```

