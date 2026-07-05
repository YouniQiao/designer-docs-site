# setScreenRotationLocked

## setScreenRotationLocked

```TypeScript
function setScreenRotationLocked(isLocked:boolean, callback: AsyncCallback<void>): void
```

设置自动转屏开关是否锁定，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLocked | boolean | Yes | 自动转屏开关是否锁定。true为锁定，false为未锁定。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置自动转屏是否锁定成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let isLocked: boolean = false;
// Set auto rotate to unlocked.
screen.setScreenRotationLocked(isLocked, (err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to unlock auto rotate. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in unlocking auto rotate.');
});

```

## setScreenRotationLocked

```TypeScript
function setScreenRotationLocked(isLocked:boolean): Promise<void>
```

设置自动转屏开关是否锁定，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLocked | boolean | Yes | 自动转屏开关是否锁定。true为锁定，false为未锁定。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let isLocked: boolean = false;
// Set auto rotate to unlocked.
screen.setScreenRotationLocked(isLocked).then(() => {
  console.info('Succeeded in unlocking auto rotate');
}).catch((err: BusinessError) => {
  console.error(`Failed to unlock auto rotate. Code: ${err.code}, message: ${err.message}`);
});

```

