# startDeviceManager

## startDeviceManager

```TypeScript
function startDeviceManager(token: number, callback: AsyncCallback<void>): void
```

Starts the device selection module to show the list of available devices on the network. This API does not involve any filter parameters and uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the module is started, err is  undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
continuationManager.startDeviceManager(token, (err) => {
  if (err.code != 0) {
    console.error('startDeviceManager failed, cause: ' + JSON.stringify(err));
    return;
  }
  console.info('startDeviceManager finished. ');
});

```

## startDeviceManager

```TypeScript
function startDeviceManager(token: number, options: ContinuationExtraParams, callback: AsyncCallback<void>): void
```

Starts the device selection module to show the list of available devices on the network. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| options | ContinuationExtraParams | 是 | Extra parameters used to filter the list of available devices. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the module is started, err is  undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
continuationManager.startDeviceManager(
  token,
  {
    deviceType: ["00E"]
  },
  (err) => {
    if (err.code != 0) {
      console.error('startDeviceManager failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('startDeviceManager finished. ');
});

```

## startDeviceManager

```TypeScript
function startDeviceManager(token: number, options?: ContinuationExtraParams): Promise<void>
```

Starts the device selection module to show the list of available devices on the network. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| options | ContinuationExtraParams | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = -1;
continuationManager.startDeviceManager(
  token,
  {
    deviceType: ["00E"]
  }).then(() => {
    console.info('startDeviceManager finished. ');
  }).catch((err: BusinessError) => {
    console.error('startDeviceManager failed, cause: ' + JSON.stringify(err));
});

```

