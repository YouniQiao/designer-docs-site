# lock

## lock

```TypeScript
function lock(callback: AsyncCallback<boolean>): void
```

Lock the screen.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | the callback of lock. |

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

screenLock.lock((err: BusinessError, data: Boolean) => {
  if (err) {
    console.error(`Failed to lock the screen, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in locking the screen. result: ${data}`);
});

```

## lock

```TypeScript
function lock(): Promise<boolean>
```

Lock the screen.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.lock().then((data: Boolean) => {
  console.info(`Succeeded in locking the screen. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to lock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

