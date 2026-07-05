# getRealTime

## Modules to Import

```TypeScript
import { systemTime } from '@ohos.systemTime';
```

## getRealTime

```TypeScript
function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getUptime](arkts-basicservices-getuptime-f.md#getuptime-1)

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | Yes | Whether the time to return is in nanoseconds.<br>- **true**: The result is innanoseconds.<br>- **false**: The result is in milliseconds. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getRealTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealTime

```TypeScript
function getRealTime(callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getUptime](arkts-basicservices-getuptime-f.md#getuptime-1)

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getRealTime((error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealTime

```TypeScript
function getRealTime(isNano?: boolean): Promise<number>
```

Obtains the time elapsed since system startup, including the deep sleep time. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getUptime](arkts-basicservices-getuptime-f.md#getuptime-1)

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No | Whether the time to return is in nanoseconds. The default value is **false**.<br>Thedefault value is false.<br>- **true**: The result is in nanoseconds.<br>- **false**: The result is inmilliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the time elapsed since system startup, including the deep sleeptime. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getRealTime().then((time: number) => {
    console.info(`Succeeded in getting real time : ${time}`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real time. message: ${error.message}, code: ${error.code}`);
}

```

