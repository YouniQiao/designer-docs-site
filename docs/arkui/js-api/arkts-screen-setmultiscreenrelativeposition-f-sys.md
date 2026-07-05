# setMultiScreenRelativePosition

## setMultiScreenRelativePosition

```TypeScript
function setMultiScreenRelativePosition(mainScreenOptions: MultiScreenPositionOptions,
    secondaryScreenOptions: MultiScreenPositionOptions): Promise<void>
```

仅在扩展模式下，设置主屏和扩展屏幕的位置信息，使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainScreenOptions | MultiScreenPositionOptions | Yes | 主屏的位置信息。 |
| secondaryScreenOptions | MultiScreenPositionOptions | Yes | 扩展屏幕的位置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let mainScreenOptions: screen.MultiScreenPositionOptions = {
  id: 0, // Main screen ID.
  startX : 0,
  startY : 0
}; // Position of the main screen.

let secondaryScreenOptions: screen.MultiScreenPositionOptions = {
  id : 12,  // Secondary screen ID.
  startX : 1000,
  startY : 1000
}; // Position of the secondary screen.

// Set the positions of the main and secondary screens.
screen.setMultiScreenRelativePosition(mainScreenOptions, secondaryScreenOptions).then(() => {
  console.info('Succeeded in setting multi screen relative position.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set multi screen relative position. Code: ${err.code}, message: ${err.message}`);
});

```

