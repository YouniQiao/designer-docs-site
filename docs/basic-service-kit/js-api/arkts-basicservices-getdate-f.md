# getDate

## Modules to Import

```TypeScript
import { systemTime } from '@ohos.systemTime';
```

## getDate

```TypeScript
function getDate(callback: AsyncCallback<Date>): void
```

Obtains the current system date. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setDate](arkts-basicservices-setdate-f-sys.md#setdate-1)

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Date&gt; | Yes | Callback used to return the current system date. |

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

Obtains the current system date. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getDate](arkts-basicservices-getdate-f.md#getdate-1)

**System capability:** SystemCapability.MiscServices.Time

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Date&gt; | Promise used to return the current system date. |

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

