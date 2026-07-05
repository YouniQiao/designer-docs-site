# on

## on('deviceSelected')

```TypeScript
function on(type: 'deviceSelected', token: number, callback: Callback<Array<ContinuationResult>>): void
```

Subscribes to device connection events. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 22

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

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
| callback | Callback&lt;Array&lt;ContinuationResult>> | 是 | Callback invoked when a device is selected from the device  list provided by the device selection module. This callback returns the device ID, type, and name. |

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
  continuationManager.on("deviceSelected", token, (data) => {
    console.info('onDeviceSelected len: ' + data.length);
    for (let i = 0; i < data.length; i++) {
      console.info('onDeviceSelected deviceId: ' + JSON.stringify(data[i].id));
      console.info('onDeviceSelected deviceType: ' + JSON.stringify(data[i].type));
      console.info('onDeviceSelected deviceName: ' + JSON.stringify(data[i].name));
    }
  });
} catch (err) {
  console.error('on failed, cause: ' + JSON.stringify(err));
}

```

## on('deviceUnselected')

```TypeScript
function on(type: 'deviceUnselected', token: number, callback: Callback<Array<ContinuationResult>>): void
```

Subscribes to device disconnection events. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 22

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

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
| callback | Callback&lt;Array&lt;ContinuationResult>> | 是 | Callback invoked when a device is unselected from the device  list provided by the device selection module. This callback returns the device ID, type, and name. |

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
  continuationManager.on("deviceUnselected", token, (data) => {
    console.info('onDeviceUnselected len: ' + data.length);
    for (let i = 0; i < data.length; i++) {
      console.info('onDeviceUnselected deviceId: ' + JSON.stringify(data[i].id));
      console.info('onDeviceUnselected deviceType: ' + JSON.stringify(data[i].type));
      console.info('onDeviceUnselected deviceName: ' + JSON.stringify(data[i].name));
    }
    console.info('onDeviceUnselected finished.');
  });
} catch (err) {
  console.error('on failed, cause: ' + JSON.stringify(err));
}

```

## on('deviceConnect')

```TypeScript
function on(type: 'deviceConnect', callback: Callback<ContinuationResult>): void
```

Subscribes to device connection events. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceConnect' | 是 | Event type. The value is fixed at deviceConnect. |
| callback | Callback&lt;ContinuationResult> | 是 | Callback invoked when a device is selected from the device list  provided by the device selection module. This callback returns the device ID, type, and name. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.on("deviceConnect", (data) => {
  console.info('onDeviceConnect deviceId: ' + JSON.stringify(data.id));
  console.info('onDeviceConnect deviceType: ' + JSON.stringify(data.type));
  console.info('onDeviceConnect deviceName: ' + JSON.stringify(data.name));
});

```

## on('deviceDisconnect')

```TypeScript
function on(type: 'deviceDisconnect', callback: Callback<string>): void
```

Subscribes to device disconnection events. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | 是 | Event type. The value is fixed at deviceDisconnect. |
| callback | Callback&lt;string> | 是 | Callback invoked when a device is unselected from the device list provided by the  device selection module. This callback returns the device ID. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.on("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

