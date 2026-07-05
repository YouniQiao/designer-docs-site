# destroyVirtualScreen

## destroyVirtualScreen

```TypeScript
function destroyVirtualScreen(screenId:long, callback: AsyncCallback<void>): void
```

销毁虚拟屏幕，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | long | Yes | 屏幕的id，该参数仅支持整数输入。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当销毁虚拟屏幕成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |
| 1400002 | Unauthorized operation. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens() or from the return value of createVirtualScreen().
let screenId: number = 1; // Virtual screen ID.
// Destroy the virtual screen.
screen.destroyVirtualScreen(screenId, (err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to destroy the virtual screen. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in destroying the virtual screen.');
});

```

## destroyVirtualScreen

```TypeScript
function destroyVirtualScreen(screenId:long): Promise<void>
```

销毁虚拟屏幕，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | long | Yes | 屏幕的id，该参数仅支持整数输入。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400001 | Invalid display or screen. |
| 1400002 | Unauthorized operation. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens() or from the return value of createVirtualScreen().
let screenId: number = 1; // Virtual screen ID.
// Destroy the virtual screen.
screen.destroyVirtualScreen(screenId).then(() => {
  console.info('Succeeded in destroying the virtual screen.');
}).catch((err: BusinessError) => {
  console.error(`Failed to destroy the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

