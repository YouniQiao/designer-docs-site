# startBluetoothDiscovery

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## startBluetoothDiscovery

```TypeScript
function startBluetoothDiscovery(): void
```

Starts scanning Bluetooth devices.
On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH and LOCATION and
APPROXIMATELY_LOCATION to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** startBluetoothDiscovery

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
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

