# on

## Modules to Import

```TypeScript
import { continuationManager } from '@ohos.continuation.continuationManager';
```

## on('deviceSelected')

```TypeScript
function on(type: 'deviceSelected', token: number, callback: Callback<Array<ContinuationResult>>): void
```

Subscribes to device connection events. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 22

**Substitutes:** on(type:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceSelected' | Yes | Event type. The value is fixed at **deviceSelected**. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | Callback&lt;Array&lt;ContinuationResult&gt;&gt; | Yes | Callback invoked when a device is selected from the devicelist provided by the device selection module. This callback returns the device ID, type, and name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [16600001](../errorcode-DistributedSchedule.md#16600001-the-system-ability-works-abnormally) | The system ability works abnormally. |
| [16600002](../errorcode-DistributedSchedule.md#16600002-the-specified-token-or-callback-is-not-registered) | The specified token or callback is not registered. |
| [16600004](../errorcode-DistributedSchedule.md#16600004-the-specified-callback-has-been-registered) | The specified callback has been registered. |

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

**Substitutes:** on(type:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceUnselected' | Yes | Event type. The value is fixed at **deviceUnselected**. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | Callback&lt;Array&lt;ContinuationResult&gt;&gt; | Yes | Callback invoked when a device is unselected from the devicelist provided by the device selection module. This callback returns the device ID, type, and name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [16600001](../errorcode-DistributedSchedule.md#16600001-the-system-ability-works-abnormally) | The system ability works abnormally. |
| [16600002](../errorcode-DistributedSchedule.md#16600002-the-specified-token-or-callback-is-not-registered) | The specified token or callback is not registered. |
| [16600004](../errorcode-DistributedSchedule.md#16600004-the-specified-callback-has-been-registered) | The specified callback has been registered. |

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

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConnect' | Yes | Event type. The value is fixed at **deviceConnect**. |
| callback | Callback&lt;ContinuationResult&gt; | Yes | Callback invoked when a device is selected from the device listprovided by the device selection module. This callback returns the device ID, type, and name. |

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

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | Yes | Event type. The value is fixed at **deviceDisconnect**. |
| callback | Callback&lt;string&gt; | Yes | Callback invoked when a device is unselected from the device list provided by thedevice selection module. This callback returns the device ID. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.on("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

