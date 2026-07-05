# getDefaultDisplaySync

## getDefaultDisplaySync

```TypeScript
function getDefaultDisplaySync(): Display
```

返回应用所在屏幕的Display对象。若应用内多个Ability在不同屏幕，返回主屏的Display对象，若应用内多个Ability在同一屏幕，返回所在屏幕的Display对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Display | 返回默认的Display对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. Possible cause: Display is not created or destroyed. |

**Example**

```TypeScript
let displayClass: display.Display | null = null;
try {
  displayClass = display.getDefaultDisplaySync();
} catch (exception) {
  console.error(`Failed to get default display. Code: ${exception.code}, message: ${exception.message}`);
}

```

