# sendScreenLockEvent

## sendScreenLockEvent

```TypeScript
function sendScreenLockEvent(event: String, parameter: int, callback: AsyncCallback<boolean>): void
```

The screen lock app sends the event to the screen lock service.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | String | Yes | event type. |
| parameter | int | Yes | operation result of the event. |
| callback | AsyncCallback&lt;boolean> | Yes | the callback of sendScreenLockEvent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.sendScreenLockEvent('unlockScreenResult', 0, (err: BusinessError, result: Boolean) => {
  if (err) {
    console.error(`Failed to send screenlock event, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in Sending screenlock event. result: ${result}`);
});

```

## sendScreenLockEvent

```TypeScript
function sendScreenLockEvent(event: String, parameter: int): Promise<boolean>
```

The screen lock app sends the event to the screen lock service.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | String | Yes | event type. |
| parameter | int | Yes | operation result of the event. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.sendScreenLockEvent('unlockScreenResult', 0).then((result: Boolean) => {
  console.info(`Succeeded in Sending screenlock event. result: ${result}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to send screenlock event, Code: ${err.code}, message: ${err.message}`);
});

```

