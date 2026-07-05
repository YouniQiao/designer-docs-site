# setTime

## setTime

```TypeScript
function setTime(time: long, callback: AsyncCallback<void>): void
```

设置系统时间，使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_TIME

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| time | long | Yes | 目标时间戳(ms)。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Set the system time to 2021-01-20 02:36:25.
let time: number = 1611081385000;
try {
  systemDateTime.setTime(time, (error: BusinessError) => {
    if (error) {
      console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in setting time`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
}

```

## setTime

```TypeScript
function setTime(time: long): Promise<void>
```

设置系统时间，使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_TIME

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| time | long | Yes | 目标时间戳(ms)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Set the system time to 2021-01-20 02:36:25.
let time: number = 1611081385000;
try {
  systemDateTime.setTime(time).then(() => {
    console.info(`Succeeded in setting time.`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set time. message: ${error.message}, code: ${error.code}`);
}

```

