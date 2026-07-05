# setGestureNavigationEnabled

## setGestureNavigationEnabled

```TypeScript
function setGestureNavigationEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

设置手势导航启用状态。使用callback异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 设置手势导航启用状态。true表示启用手势导航；false表示禁用手势导航。当前仅禁用从屏幕下拉的手势，其他手势未禁用。 |
| callback | AsyncCallback&lt;void> | Yes | 回调信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  window.setGestureNavigationEnabled(true, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set gesture navigation enabled. Cause code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in setting gesture navigation enabled.');
  });
} catch (exception) {
  console.error(`Failed to set gesture navigation enabled. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setGestureNavigationEnabled

```TypeScript
function setGestureNavigationEnabled(enable: boolean): Promise<void>
```

设置手势导航启用状态。使用Promise异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 设置手势导航启用状态。true表示启用手势导航；false表示禁用手势导航。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let promise = window.setGestureNavigationEnabled(true);
  promise.then(() => {
    console.info('Succeeded in setting gesture navigation enabled.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set gesture navigation enabled. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to set gesture navigation enabled. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

