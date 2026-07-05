# getRealActiveTime

## getRealActiveTime

```TypeScript
function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void
```

获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。

**Since:** 9

**Deprecated since:** 12

**Substitute:** systemDateTime.getUptime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | Yes | 返回结果是否为纳秒数。 - true：表示返回结果为纳秒数（ns）。 - false：表示返回结果为毫秒数（ms）。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，返回自系统启动以来经过的时间，但不包括深度睡眠时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealActiveTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real active time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```

## getRealActiveTime

```TypeScript
function getRealActiveTime(callback: AsyncCallback<number>): void
```

获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。

**Since:** 9

**Deprecated since:** 12

**Substitute:** systemDateTime.getUptime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，返回自系统启动以来经过的时间（ms），但不包括深度睡眠时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealActiveTime((error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real active time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```

## getRealActiveTime

```TypeScript
function getRealActiveTime(isNano?: boolean): Promise<number>
```

获取自系统启动以来经过的时间，不包括深度睡眠时间，使用Promise异步回调。

**Since:** 9

**Deprecated since:** 12

**Substitute:** systemDateTime.getUptime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回自系统启动以来经过的时间，但不包括深度睡眠时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealActiveTime().then((time: number) => {
    console.info(`Succeeded in getting real active time : ${time}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```

