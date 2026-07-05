# unlock

## unlock

```TypeScript
function unlock(callback: AsyncCallback<boolean>): void
```

Unlock the screen.

**Since:** 11

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | the callback of unlock. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |
| 13200003 | Invalid use. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.unlock((err: BusinessError, data: Boolean) => {
  if (err) {
    console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in unlocking the screen. result: ${data}`);
});

```

## unlock

```TypeScript
function unlock(): Promise<boolean>
```

Unlock the screen.

**Since:** 11

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |
| 13200003 | Invalid use. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.unlock().then((data: Boolean) => {
  console.info(`Succeeded in unlocking the screen. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

