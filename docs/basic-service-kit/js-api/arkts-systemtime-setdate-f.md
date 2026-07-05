# setDate

## setDate

```TypeScript
function setDate(date: Date, callback: AsyncCallback<void>): void
```

设置系统日期，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.setDate

**Required permissions:** 

 ohos.permission.SET_TIME

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | Date | Yes | 目标日期。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let date = new Date();
try {
  systemTime.setDate(date, (error: BusinessError) => {
    if (error) {
      console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
      return;
    }
    console.info(`Succeeded in setting date.`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
}

```

## setDate

```TypeScript
function setDate(date: Date): Promise<void>
```

设置系统日期，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.systemDateTime:systemDateTime.setDate

**Required permissions:** 

 ohos.permission.SET_TIME

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | Date | Yes | 目标日期。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| -1 |  |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let date = new Date(); 
try {
  systemTime.setDate(date).then(() => {
    console.info(`Succeeded in setting date.`);
  }).catch((error: BusinessError) => {
    console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.info(`Failed to set date. message: ${error.message}, code: ${error.code}`);
}

```

