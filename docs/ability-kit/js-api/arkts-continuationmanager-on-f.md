# on

## on('deviceSelected')

```TypeScript
function on(type: 'deviceSelected', token: number, callback: Callback<Array<ContinuationResult>>): void
```

Subscribes to device connection events. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 22

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceSelected' | Yes | Event type. The value is fixed at deviceSelected. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | Callback&lt;Array&lt;ContinuationResult>> | Yes | Callback invoked when a device is selected from the device  list provided by the device selection module. This callback returns the device ID, type, and name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |
| 16600004 | The specified callback has been registered. |

**Example**

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

**Since:** 9

**Deprecated since:** 22

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceUnselected' | Yes | Event type. The value is fixed at deviceUnselected. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | Callback&lt;Array&lt;ContinuationResult>> | Yes | Callback invoked when a device is unselected from the device  list provided by the device selection module. This callback returns the device ID, type, and name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |
| 16600004 | The specified callback has been registered. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConnect' | Yes | Event type. The value is fixed at deviceConnect. |
| callback | Callback&lt;ContinuationResult> | Yes | Callback invoked when a device is selected from the device list  provided by the device selection module. This callback returns the device ID, type, and name. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | Yes | Event type. The value is fixed at deviceDisconnect. |
| callback | Callback&lt;string> | Yes | Callback invoked when a device is unselected from the device list provided by the  device selection module. This callback returns the device ID. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.on("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

