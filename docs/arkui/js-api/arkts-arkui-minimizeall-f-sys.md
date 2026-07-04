# minimizeAll (System API)

## Modules to Import

```TypeScript
import { window } from '@ohos.window';
```

## minimizeAll

```TypeScript
function minimizeAll(id: number, callback: AsyncCallback<void>): void
```

Minimizes all main windows on a display.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | ID of the [display](arkts-arkui-displaystate-e.md#displaystate). The value must be an integer. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 12 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities.<br>**Applicable version:** 12 |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

**Example**

```TypeScript
import { display } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
displayClass = display.getDefaultDisplaySync();

try {
  if (!displayClass) {
    console.error('displayClass is null');
  } else {
    window.minimizeAll(displayClass.id, (err: BusinessError) => {
      const errCode: number = err?.code;
      if (errCode) {
        console.error(`Failed to minimize all windows. Cause code: ${err?.code}, message: ${err?.message}`);
        return;
      }
      console.info('Succeeded in minimizing all windows.');
    });
  }
} catch (exception) {
  console.error(`Failed to minimize all windows. Cause code: ${exception.code}, message: ${exception.message}`);
}

```


## minimizeAll

```TypeScript
function minimizeAll(id: number): Promise<void>
```

Minimizes all main windows on a display. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | ID of the [display](arkts-arkui-displaystate-e.md#displaystate). The value must be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 12 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities.<br>**Applicable version:** 12 |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

**Example**

```TypeScript
import { display } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
displayClass = display.getDefaultDisplaySync();

try {
  let promise = window.minimizeAll(displayClass.id);
  promise.then(() => {
    console.info('Succeeded in minimizing all windows.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to minimize all windows. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to minimize all windows. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

