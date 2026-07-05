# updateConnectStatus

## updateConnectStatus

```TypeScript
function updateConnectStatus(
    token: number,
    deviceId: string,
    status: DeviceConnectState,
    callback: AsyncCallback<void>
  ): void
```

Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| deviceId | string | 是 | Device ID. |
| status | DeviceConnectState | 是 | Device connection state. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the state is updated, err is  undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = -1;
let deviceId: string = "test deviceId";
continuationManager.updateConnectStatus(token, deviceId, continuationManager.DeviceConnectState.CONNECTED, (err) => {
  if (err.code != 0) {
    console.error('updateConnectStatus failed, cause: ' + JSON.stringify(err));
    return;
  }
  console.info('updateConnectStatus finished. ');
});

```

## updateConnectStatus

```TypeScript
function updateConnectStatus(token: number, deviceId: string, status: DeviceConnectState): Promise<void>
```

Instructs the device selection module to update the device connection state. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync

**模型约束：** 此接口仅可在Stage模型下使用。

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

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = 1;
let deviceId: string = "test deviceId";
continuationManager.updateConnectStatus(token, deviceId, continuationManager.DeviceConnectState.CONNECTED)
  .then(() => {
    console.info('updateConnectStatus finished. ');
  })
  .catch((err: BusinessError) => {
    console.error('updateConnectStatus failed, cause: ' + JSON.stringify(err));
});

```

