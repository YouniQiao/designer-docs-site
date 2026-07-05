# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device.

**Since:** 10

**Required permissions:** 

- API version10  to  12: ohos.permission.ACCESS_BLUETOOTH

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| BluetoothState | Returns the Bluetooth status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. [since 10 - 12] |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let state = access.getState();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

