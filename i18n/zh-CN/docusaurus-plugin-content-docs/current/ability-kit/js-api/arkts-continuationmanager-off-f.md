# off

## off('deviceSelected')

```TypeScript
function off(type: 'deviceSelected', token: number): void
```

Unsubscribes from device connection events.

**起始版本：** 9

**废弃版本：** 22

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceSelected' | 是 | Event type. The value is fixed at deviceSelected. |
| token | number | 是 | Token obtained after the registration of the continuation management service. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |
| 16600004 | The specified callback has been registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
try {
  continuationManager.off("deviceSelected", token);
} catch (err) {
  console.error('off failed, cause: ' + JSON.stringify(err));
}

```

## off('deviceUnselected')

```TypeScript
function off(type: 'deviceUnselected', token: number): void
```

Unsubscribes from device disconnection events.

**起始版本：** 9

**废弃版本：** 22

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceUnselected' | 是 | Event type. The value is fixed at deviceUnselected. |
| token | number | 是 | Token obtained after the registration of the continuation management service. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |
| 16600004 | The specified callback has been registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
try {
  continuationManager.off("deviceUnselected", token);
} catch (err) {
  console.error('off failed, cause: ' + JSON.stringify(err));
}

```

## off('deviceConnect')

```TypeScript
function off(type: 'deviceConnect', callback?: Callback<ContinuationResult>): void
```

Unsubscribes from device connection events. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceConnect' | 是 | Event type. The value is fixed at deviceConnect. |
| callback | Callback&lt;ContinuationResult> | 否 |  |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.off("deviceConnect", (data) => {
  console.info('onDeviceConnect deviceId: ' + JSON.stringify(data.id));
  console.info('onDeviceConnect deviceType: ' + JSON.stringify(data.type));
  console.info('onDeviceConnect deviceName: ' + JSON.stringify(data.name));
});

```

## off('deviceDisconnect')

```TypeScript
function off(type: 'deviceDisconnect', callback?: Callback<string>): void
```

Unsubscribes from device disconnection events. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | 是 | Event type. The value is fixed at deviceDisconnect. |
| callback | Callback&lt;string> | 否 |  |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.off("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

