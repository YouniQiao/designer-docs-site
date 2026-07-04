# destroyVirtualScreen (System API)

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## destroyVirtualScreen

```TypeScript
function destroyVirtualScreen(screenId:number, callback: AsyncCallback<void>): void
```

Destroys a virtual screen. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID. The value must be an integer. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the virtual screen is destroyed,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400002](../errorcode-display.md#1400002-unauthorized-operation) | Unauthorized operation. |

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
function destroyVirtualScreen(screenId:number): Promise<void>
```

Destroys a virtual screen. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID. The value must be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400002](../errorcode-display.md#1400002-unauthorized-operation) | Unauthorized operation. |

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

