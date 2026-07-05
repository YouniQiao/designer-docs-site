# getPrimaryDisplaySync

## getPrimaryDisplaySync

```TypeScript
function getPrimaryDisplaySync(): Display
```

获取主屏信息。除2in1之外的设备获取的是设备自带屏幕的Display对象；2in1设备外接屏幕时获取的是当前主屏幕的Display对象；2in1设备没有外接屏幕时获取的是自带屏幕的Display对象。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Display | 当前设备主屏幕的Display对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. Possible cause: Invalid display id. |

**Example**

```TypeScript
let displayClass: display.Display | null = null;

displayClass = display.getPrimaryDisplaySync();

```

