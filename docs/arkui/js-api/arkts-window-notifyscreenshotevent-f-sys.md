# notifyScreenshotEvent

## notifyScreenshotEvent

```TypeScript
function notifyScreenshotEvent(eventType: ScreenshotEventType): Promise<void>
```

通知屏幕截屏的事件类型，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | ScreenshotEventType | Yes | 截屏事件类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let eventType: window.ScreenshotEventType = window.ScreenshotEventType.SYSTEM_SCREENSHOT;
  let promise = window.notifyScreenshotEvent(eventType);
  promise.then(() => {
    console.info(`Succeeded in notifying screenshot event type.`);
  }).catch((err: BusinessError) =>{
    console.error(`Failed to notify screenshot event type. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to notify screenshot event type. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

