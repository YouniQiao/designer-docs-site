# updateContinuationState

## updateContinuationState

```TypeScript
function updateContinuationState(
    token: number,
    deviceId: string,
    status: DeviceConnectState,
    callback: AsyncCallback<void>
  ): void
```

Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 22

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| deviceId | string | 是 | Device ID. |
| status | DeviceConnectState | 是 | Device connection state. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the state is updated, err is  undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
let deviceId: string = "test deviceId";
try {
  continuationManager.updateContinuationState(token, deviceId, continuationManager.DeviceConnectState.CONNECTED, (err) => {
    if (err.code != 0) {
      console.error('updateContinuationState failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('updateContinuationState finished. ');
  });
} catch (err) {
  console.error('updateContinuationState failed, cause: ' + JSON.stringify(err));
}

```

## updateContinuationState

```TypeScript
function updateContinuationState(token: number, deviceId: string, status: DeviceConnectState): Promise<void>
```

Instructs the device selection module to update the device connection state. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 22

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| deviceId | string | 是 | Device ID. |
| status | DeviceConnectState | 是 | Device connection state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = 1;
let deviceId: string = "test deviceId";
try {
  continuationManager.updateContinuationState(token, deviceId, continuationManager.DeviceConnectState.CONNECTED)
    .then(() => {
      console.info('updateContinuationState finished. ');
    })
    .catch((err: BusinessError) => {
      console.error('updateContinuationState failed, cause: ' + JSON.stringify(err));
    });
} catch (err) {
  console.error('updateContinuationState failed, cause: ' + JSON.stringify(err));
}

```

