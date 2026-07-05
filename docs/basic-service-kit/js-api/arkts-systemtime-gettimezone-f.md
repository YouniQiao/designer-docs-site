# getTimezone

## getTimezone

```TypeScript
function getTimezone(callback: AsyncCallback<string>): void
```

获取系统时区，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getTimezone(callback:

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，返回系统时区。具体可见  [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getTimezone((error: BusinessError, data: string) => {
    if (error) {
      console.info(`Failed to get timezone. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting timezone : ${data}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get timezone. message: ${error.message}, code: ${error.code}`);
}

```

## getTimezone

```TypeScript
function getTimezone(): Promise<string>
```

获取系统时区，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getTimezone()

**System capability:** SystemCapability.MiscServices.Time

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回系统时区。具体可见  [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getTimezone().then((data: string) => {
    console.info(`Succeeded in getting timezone: ${data}`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to get timezone. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get timezone. message: ${error.message}, code: ${error.code}`);
}

```

