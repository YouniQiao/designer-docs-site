# setBluetoothScanMode

## setBluetoothScanMode

```TypeScript
function setBluetoothScanMode(mode: ScanMode, duration: number): void
```

Sets the Bluetooth scan mode for a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.connection/connection#setBluetoothScanMode

**Required permissions:** 

- API version9  to  9: ohos.permission.USE_BLUETOOTH

- API version10 and later: ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | ScanMode | Yes | Indicates the Bluetooth scan mode to set, {@link ScanMode}. |
| duration | number | Yes | Indicates the duration in seconds, in which the host is discoverable. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    // The device can be discovered and connected only when the discoverable and connectable mode is used.
    bluetoothManager.setBluetoothScanMode(bluetoothManager.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE, 100);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

