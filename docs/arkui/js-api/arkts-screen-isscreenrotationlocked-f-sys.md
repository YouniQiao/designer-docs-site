# isScreenRotationLocked

## isScreenRotationLocked

```TypeScript
function isScreenRotationLocked(callback: AsyncCallback<boolean>): void
```

查询当前自动转屏是否锁定，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前自动转屏处于锁定状态；返回false表示当前自动转屏不处于锁定状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Check whether auto screen rotation is locked.
screen.isScreenRotationLocked((err: BusinessError, isLocked: boolean) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to get the screen rotation lock status. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting the screen rotation lock status. isLocked: ${isLocked}`);
});

```

## isScreenRotationLocked

```TypeScript
function isScreenRotationLocked(): Promise<boolean>
```

查询当前自动转屏是否锁定，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前自动转屏处于锁定状态；返回false表示当前自动转屏不处于锁定状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Check whether auto screen rotation is locked.
screen.isScreenRotationLocked().then((isLocked: boolean) => {
  console.info(`Succeeded in getting the screen rotation lock status. isLocked: ${isLocked}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get the screen rotation lock status. Code: ${err.code}, message: ${err.message}`);
});

```

