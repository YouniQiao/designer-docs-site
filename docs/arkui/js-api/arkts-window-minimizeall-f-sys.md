# minimizeAll

## minimizeAll

```TypeScript
function minimizeAll(id: long, callback: AsyncCallback<void>): void
```

最小化指定ID的屏幕中的所有主窗口。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | long | Yes | 显示设备[Display](arkts-display-displaystate-e.md#DisplayState)的ID号，该参数仅支持整数输入。 |
| callback | AsyncCallback&lt;void> | Yes | 回调信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. [since 12] |
| 1300003 | This window manager service works abnormally. |

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
function minimizeAll(id: long): Promise<void>
```

最小化指定ID的屏幕中的所有主窗口，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | long | Yes | 显示设备[Display](arkts-display-displaystate-e.md#DisplayState)的ID号，该参数仅支持整数输入。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. [since 12] |
| 1300003 | This window manager service works abnormally. |

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

