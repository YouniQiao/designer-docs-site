# lock (System API)

## Modules to Import

```TypeScript
import { screenLock } from '@ohos.screenLock';
```

## lock

```TypeScript
function lock(callback: AsyncCallback<boolean>): void
```

Lock the screen.

**Since:** 9

**Required permissions:** ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of lock. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |
| [13200002](../../apis-basic-services-kit/errorcode-screenlock.md#13200002-screen-lock-management-service-is-abnormal) | the screenlock management service is abnormal. |

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

**Required permissions:** ohos.permission.ACCESS_SCREEN_LOCK_INNER

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |
| [13200002](../../apis-basic-services-kit/errorcode-screenlock.md#13200002-screen-lock-management-service-is-abnormal) | the screenlock management service is abnormal. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.lock().then((data: Boolean) => {
  console.info(`Succeeded in locking the screen. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to lock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

