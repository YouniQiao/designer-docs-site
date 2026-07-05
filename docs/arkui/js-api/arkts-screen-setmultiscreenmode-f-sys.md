# setMultiScreenMode

## setMultiScreenMode

```TypeScript
function setMultiScreenMode(primaryScreenId: long, secondaryScreenId: long,
    secondaryScreenMode: MultiScreenMode): Promise<void>
```

设置扩展屏幕的显示模式（镜像/扩展），使用Promise异步回调。primaryScreenId和secondaryScreenId均为0时，仅在扩展屏显示。

**Since:** 13

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primaryScreenId | long | Yes | 主屏的id，该参数应为非负整数。如果输入的数字包含小数部分，向下取整。 |
| secondaryScreenId | long | Yes | 扩展屏幕的id，该参数应为非负整数。如果输入的数字包含小数部分，向下取整。 |
| secondaryScreenMode | MultiScreenMode | Yes | 扩展屏幕的显示模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let primaryScreenId: number = 0; // Primary screen ID.
let secondaryScreenId: number = 12; // Secondary screen ID.
let screenMode: screen.MultiScreenMode = screen.MultiScreenMode.SCREEN_MIRROR;
// Set the display mode of the secondary screen to mirror mode.
screen.setMultiScreenMode(primaryScreenId, secondaryScreenId, screenMode).then(() => {
  console.info('Succeeded in setting multi screen mode. Data: ');
}).catch((err: BusinessError) => {
  console.error(`Failed to set multi screen mode. Code: ${err.code}, message: ${err.message}`);
});

```

