# Display

Implements a Display instance, with attributes and APIs defined.

Before calling any API in Display, you must use [getAllDisplays()](arkts-arkui-display-getalldisplays-f.md#getalldisplays-1) or [getDefaultDisplaySync()](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) to obtain a Display instance.

**Since:** 7

<!--Device-display-interface Display--><!--Device-display-interface Display-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## hasImmersiveWindow

```TypeScript
hasImmersiveWindow(callback: AsyncCallback<boolean>): void
```

Checks whether this display contains an immersive window. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-Display-hasImmersiveWindow(callback: AsyncCallback<boolean>): void--><!--Device-Display-hasImmersiveWindow(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. **true** if the display contains an immersive window, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

let displayClass: display.Display | null = null;
// Obtain the default Display object.
displayClass = display.getDefaultDisplaySync();
// Check whether an immersive window is included.
displayClass.hasImmersiveWindow((err: BusinessError, data: boolean) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to check whether there is immersive window. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in checking whether there is immersive window. data: ${data}`);
});

```

## hasImmersiveWindow

```TypeScript
hasImmersiveWindow(): Promise<boolean>
```

Checks whether this display contains an immersive window. This API uses a promise to return the result.

**Since:** 11

<!--Device-Display-hasImmersiveWindow(): Promise<boolean>--><!--Device-Display-hasImmersiveWindow(): Promise<boolean>-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. **true** if the display contains an immersive window, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

let displayClass: display.Display | null = null;
// Obtain the default Display object.
displayClass = display.getDefaultDisplaySync();
// Check whether an immersive window is included.
let promise = displayClass.hasImmersiveWindow();
promise.then((data) => {
  console.info(`Succeeded in checking whether there is immersive window. data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to check whether there is immersive window. Code: ${err.code}, message: ${err.message}`);
});

```

