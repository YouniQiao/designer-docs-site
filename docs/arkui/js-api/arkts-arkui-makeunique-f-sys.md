# makeUnique (System API)

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## makeUnique

```TypeScript
function makeUnique(uniqueScreen: Array<number>): Promise<Array<number>>
```

Sets the screen to independent display mode. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueScreen | Array&lt;number&gt; | Yes | Arry of independent screen IDs. Each ID must be an integer greater than 0;otherwise, error code 401 is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the independent screen IDs, where each ID is an integergreater than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, non-system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

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

