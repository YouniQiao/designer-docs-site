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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| deviceId | string | Yes | Device ID. |
| status | DeviceConnectState | Yes | Device connection state. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the state is updated, err is  undefined; otherwise, err is an error object. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| deviceId | string | Yes | Device ID. |
| status | DeviceConnectState | Yes | Device connection state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

