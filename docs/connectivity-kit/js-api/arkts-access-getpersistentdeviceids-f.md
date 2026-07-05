# getPersistentDeviceIds

## getPersistentDeviceIds

```TypeScript
function getPersistentDeviceIds(): string[]
```

Obtains the persistent randomized device address of the application.

**Since:** 16

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Returns the list of persistent random device addresses. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Get persistent device address failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let deviceIds = access.getPersistentDeviceIds();
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

