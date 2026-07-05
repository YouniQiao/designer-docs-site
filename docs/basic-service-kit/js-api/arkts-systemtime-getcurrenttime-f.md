# getCurrentTime

## getCurrentTime

```TypeScript
function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void
```

获取自Unix纪元以来经过的时间，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getTime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | Yes | 返回结果是否为纳秒数。 - true：表示返回结果为纳秒数（ns）。 - false：表示返回结果为毫秒数（ms）。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，返回自Unix纪元以来经过的时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getCurrentTime(true, (error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime: ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

## getCurrentTime

```TypeScript
function getCurrentTime(callback: AsyncCallback<number>): void
```

获取自Unix纪元以来经过的时间，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getTime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，返回自Unix纪元以来经过的时间（ms）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getCurrentTime((error: BusinessError, time: number) => {
    if (error) {
      console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in getting currentTime : ${time}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

## getCurrentTime

```TypeScript
function getCurrentTime(isNano?: boolean): Promise<number>
```

获取自Unix纪元以来经过的时间，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.getTime

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNano | boolean | No | 返回结果是否为纳秒数，默认值为false。 默认值为false。 - true：表示返回结果为纳秒数（ns）。 - false：表示返回结果为毫秒数  （ms）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回自Unix纪元以来经过的时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemTime.getCurrentTime().then((time: number) => {
    console.info(`Succeeded in getting currentTime : ${time}`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to get currentTime. message: ${error.message}, code: ${error.code}`);
}

```

