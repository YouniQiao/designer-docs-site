# getRealActiveTime

## Modules to Import

```TypeScript
import { systemTime } from '@kit.BasicServicesKit';
```

## getRealActiveTime

```TypeScript
function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous
callback to return the result.

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
  systemTime.getRealActiveTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real active time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealActiveTime

```TypeScript
function getRealActiveTime(callback: AsyncCallback<number>): void
```

Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous
callback to return the result.

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
  systemTime.getRealActiveTime((error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting real active time : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```


## getRealActiveTime

```TypeScript
function getRealActiveTime(isNano?: boolean): Promise<number>
```

Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses a promise to return the
result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getUptime](arkts-basicservices-getuptime-f.md#getuptime-1)

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No | Whether the time to return is in nanoseconds. The default value is **false**.<br>-**true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the time elapsed since system startup, excluding the deep sleeptime. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getRealActiveTime().then((time: number) => {
    console.info(`Succeeded in getting real active time : ${time}`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get real active time. message: ${error.message}, code: ${error.code}`);
}

```

