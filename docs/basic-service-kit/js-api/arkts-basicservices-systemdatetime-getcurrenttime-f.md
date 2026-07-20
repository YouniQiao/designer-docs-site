# getCurrentTime

## Modules to Import

```TypeScript
import { systemDateTime } from '@kit.BasicServicesKit';
```

## getCurrentTime

```TypeScript
function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void
```

Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getTime](arkts-basicservices-systemdatetime-gettime-f.md#gettime-1)

<!--Device-systemDateTime-function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void--><!--Device-systemDateTime-function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | Yes | Whether the time to return is in nanoseconds.<br>- **true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the time elapsed since the Unix epoch. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```


## getCurrentTime

```TypeScript
function getCurrentTime(callback: AsyncCallback<number>): void
```

Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getTime](arkts-basicservices-systemdatetime-gettime-f.md#gettime-1)

<!--Device-systemDateTime-function getCurrentTime(callback: AsyncCallback<number>): void--><!--Device-systemDateTime-function getCurrentTime(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the time elapsed since the Unix epoch, in milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime((error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```


## getCurrentTime

```TypeScript
function getCurrentTime(isNano?: boolean): Promise<number>
```

Obtains the time elapsed since the Unix epoch. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getTime](arkts-basicservices-systemdatetime-gettime-f.md#gettime-1)

<!--Device-systemDateTime-function getCurrentTime(isNano?: boolean): Promise<number>--><!--Device-systemDateTime-function getCurrentTime(isNano?: boolean): Promise<number>-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No | Whether the time to return is in nanoseconds. The default value is **false**.<br>-**true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the timestamp that has elapsed since the Unix epoch. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getCurrentTime().then((time: number) => {
    console.info(`Succeeded in getting currentTime : ${time}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

