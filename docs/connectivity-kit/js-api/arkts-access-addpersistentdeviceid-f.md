# addPersistentDeviceId

## addPersistentDeviceId

```TypeScript
function addPersistentDeviceId(deviceId: string): Promise<void>
```

Add a persistent random device address. Once the randomized address is successfully added, the application can save it for an extended period of time.

**Since:** 16

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | the randomized address of remote device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of supported device addresses has reached the upper limit. |
| 2900099 | Add persistent device address failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let deviceId = '11:22:33:44:55:66' // The address can be obtained through BLE scanning.
try {
    access.addPersistentDeviceId(deviceId);
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

