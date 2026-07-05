# getBluetoothScanMode

## getBluetoothScanMode

```TypeScript
function getBluetoothScanMode(): ScanMode
```

Obtains the Bluetooth scanning mode of a device.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.getBluetoothScanMode

**Required permissions:** 

 ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| ScanMode | Returns the Bluetooth scanning mode, {@link ScanMode}. |

**Example**

```TypeScript
let scanMode : bluetooth.ScanMode = bluetooth.getBluetoothScanMode();

```

