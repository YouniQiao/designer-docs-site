# makeUnique

## makeUnique

```TypeScript
function makeUnique(uniqueScreen: Array<long>): Promise<Array<long>>
```

将屏幕设置为异源模式，使用Promise异步回调。

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueScreen | Array&lt;long> | Yes | 异源屏幕ID集合。其中ID应为大于0的整数，否则返回401错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;long>> | Promise对象。返回异源屏幕的displayId集合，其中id为大于0的整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let uniqueScreenIds: Array<number> = [1001, 1002, 1003]; // ID array of independent screens.
// Set the screen to independent mode.
screen.makeUnique(uniqueScreenIds).then((data: Array<number>) => {
  console.info('Succeeded in making unique screens.');
}).catch((err: BusinessError) => {
  console.error(`Failed to make unique screens. Code: ${err.code}, message: ${err.message}`);
});

```

