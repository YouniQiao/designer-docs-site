# disableBluetooth

## disableBluetooth

```TypeScript
function disableBluetooth(): boolean
```

Disables Bluetooth on a device.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.disableBluetooth

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if Bluetooth is being disabled; returns {@code false} if an error occurs. |

**Example**

```TypeScript
let disable : boolean = bluetooth.disableBluetooth();

```

