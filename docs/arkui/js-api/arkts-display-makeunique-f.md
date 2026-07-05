# makeUnique

## makeUnique

```TypeScript
function makeUnique(screenId: long): Promise<void>
```

将屏幕设置为异源模式，使用Promise异步回调。

**Since:** 16

**Required permissions:** 

 ohos.permission.ACCESS_VIRTUAL_SCREEN

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | long | Yes | 要设置成异源模式的屏幕ID。其中id应为大于0的整数，否则返回401错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported.function makeUnique can not work correctly due to limited  device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let screenId: number = 0;
// Set the screen to independent mode.
display.makeUnique(screenId).then(() => {
  console.info('Succeeded in making unique screens.');
}).catch((err: BusinessError) => {
  console.error(`Failed to make unique screens. Code: ${err.code}, message: ${err.message}`);
});

```

