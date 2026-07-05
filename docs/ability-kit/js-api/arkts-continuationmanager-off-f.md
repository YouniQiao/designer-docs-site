# off

## off('deviceSelected')

```TypeScript
function off(type: 'deviceSelected', token: number): void
```

Unsubscribes from device connection events.

**Since:** 9

**Deprecated since:** 22

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

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

**Since:** 9

**Deprecated since:** 22

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConnect' | Yes | Event type. The value is fixed at deviceConnect. |
| callback | Callback&lt;ContinuationResult> | No |  |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | Yes | Event type. The value is fixed at deviceDisconnect. |
| callback | Callback&lt;string> | No |  |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.off("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

