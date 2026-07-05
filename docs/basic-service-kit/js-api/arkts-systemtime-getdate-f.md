# getDate

## getDate

```TypeScript
function getDate(callback: AsyncCallback<Date>): void
```

获取当前系统日期，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getDate

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Date> | Yes | 回调函数，返回当前系统日期。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getDate((error: BusinessError, date: Date) => {
    if (error) {
      console.info(`Failed to get date. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting date : ${date}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get date. message: ${error.message}, code: ${error.code}`);
}

```

## getDate

```TypeScript
function getDate(): Promise<Date>
```

获取当前系统日期，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getDate

**System capability:** SystemCapability.MiscServices.Time

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Date> | Promise对象，返回当前系统日期。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getDate().then((date: Date) => {
    console.info(`Succeeded in getting date : ${date}`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to get date. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get date. message: ${error.message}, code: ${error.code}`);
}

```

