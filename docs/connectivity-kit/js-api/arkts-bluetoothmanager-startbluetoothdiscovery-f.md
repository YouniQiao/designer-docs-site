# startBluetoothDiscovery

## startBluetoothDiscovery

```TypeScript
function startBluetoothDiscovery(): void
```

Starts scanning Bluetooth devices. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and LOCATION and APPROXIMATELY_LOCATION to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.connection/connection#startBluetoothDiscovery

**Required permissions:** 

- API version9  to  9: ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION * and ohos.permission.APPROXIMATELY_LOCATION

- API version10 and later: ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let deviceId: Array<string>;
function onReceiveEvent(data: Array<string>) {
    deviceId = data;
}
try {
    bluetoothManager.on('bluetoothDeviceFind', onReceiveEvent);
    bluetoothManager.startBluetoothDiscovery();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

