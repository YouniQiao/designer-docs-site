# getCurrentFoldCreaseRegion

## getCurrentFoldCreaseRegion

```TypeScript
function getCurrentFoldCreaseRegion(): FoldCreaseRegion
```

在当前显示模式下获取折叠折痕区域。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FoldCreaseRegion | FoldCreaseRegion对象，返回设备在当前显示模式下的折叠折痕区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
let data: display.FoldCreaseRegion = display.getCurrentFoldCreaseRegion();
console.info(`Succeeded in obtaining current fold crease region. Data: ${JSON.stringify(data)}`);

```

