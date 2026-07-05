# deactivateCooperate

## deactivateCooperate

```TypeScript
function deactivateCooperate(isUnchained: boolean, callback: AsyncCallback<void>): void
```

停止键鼠穿越，使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnchained | boolean | Yes | 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，键鼠穿越停止成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. [dynamiconly] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivateCooperate(false, (error: BusinessError) => {
    if (error) {
      console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
      return;
    }
    console.info(`Stop Keyboard mouse crossing success.`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

## deactivateCooperate

```TypeScript
function deactivateCooperate(isUnchained: boolean): Promise<void>
```

停止键鼠穿越，使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnchained | boolean | Yes | 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  cooperate.deactivateCooperate(false).then(() => {
    console.info(`Stop Keyboard mouse crossing success.`);
  }, (error: BusinessError) => {
    console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
  });
} catch (error) {
  console.error(`Stop Keyboard mouse crossing failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
}

```

