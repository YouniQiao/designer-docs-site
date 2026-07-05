# clearUpAppData

## clearUpAppData

```TypeScript
function clearUpAppData(bundleName: string, appCloneIndex?: int): Promise<void>
```

根据Bundle名称和应用分身索引，清除指定应用的数据。使用Promise异步回调。

**Since:** 13

**Required permissions:** 

 ohos.permission.CLEAN_APPLICATION_DATA

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示Bundle名称。 |
| appCloneIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |
| 16000073 | The app clone index is invalid. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName: string = 'com.ohos.demo';
let appCloneIndex: number = 0;

try {
  appManager.clearUpAppData(bundleName, appCloneIndex).then(() => {
    console.info(`clearUpAppData success.`);
  }).catch((err: BusinessError) => {
    console.error(`clearUpAppData fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

