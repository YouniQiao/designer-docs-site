# off

## Modules to Import

```TypeScript
import { continuationManager } from '@ohos.continuation.continuationManager';
```

## off('deviceSelected')

```TypeScript
function off(type: 'deviceSelected', token: number): void
```

Unsubscribes from device connection events.

**Since:** 9

**Deprecated since:** 22

**Substitutes:** off(type:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceSelected' | Yes | Event type. The value is fixed at **deviceSelected**. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |

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

**Substitutes:** off(type:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceUnselected' | Yes | Event type. The value is fixed at **deviceUnselected**. |
| token | number | Yes | Token obtained after the registration of the continuation management service. |

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

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConnect' | Yes | Event type. The value is fixed at **deviceConnect**. |
| callback | Callback&lt;ContinuationResult&gt; | No | Callback invoked when a device is selected from the device listprovided by the device selection module. This callback returns the device ID, type, and name. |

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

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceDisconnect' | Yes | Event type. The value is fixed at **deviceDisconnect**. |
| callback | Callback&lt;string&gt; | No | Callback invoked when a device is unselected from the device list provided bythe device selection module. This callback returns the device ID. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

continuationManager.off("deviceDisconnect", (data) => {
  console.info('onDeviceDisconnect deviceId: ' + JSON.stringify(data));
});

```

