# getRealTime

## Modules to Import

```TypeScript
import { systemDateTime } from '@kit.BasicServicesKit';
```

## getRealTime

```TypeScript
function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getUptime](arkts-basicservices-systemdatetime-getuptime-f.md#getuptime-1)

<!--Device-systemDateTime-function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void--><!--Device-systemDateTime-function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | Yes | Whether the time to return is in nanoseconds.<br>- **true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealTime

```TypeScript
function getRealTime(callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getUptime](arkts-basicservices-systemdatetime-getuptime-f.md#getuptime-1)

<!--Device-systemDateTime-function getRealTime(callback: AsyncCallback<number>): void--><!--Device-systemDateTime-function getRealTime(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealTime((error: BusinessError, time: number) => {
    if (error) {
      console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealTime

```TypeScript
function getRealTime(isNano?: boolean): Promise<number>
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getUptime](arkts-basicservices-systemdatetime-getuptime-f.md#getuptime-1)

<!--Device-systemDateTime-function getRealTime(isNano?: boolean): Promise<number>--><!--Device-systemDateTime-function getRealTime(isNano?: boolean): Promise<number>-End-->

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No | Whether the time to return is in nanoseconds. The default value is **false**.<br>-**true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the time elapsed since system startup, including the deep sleep time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.getRealTime().then((time: number) => {
    console.info(`Succeeded in getting real time : ${time}`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```

