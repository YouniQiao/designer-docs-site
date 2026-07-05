# enableBluetooth

## enableBluetooth

```TypeScript
function enableBluetooth(): boolean
```

Enables Bluetooth on a device.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.enableBluetooth

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if Bluetooth is being enabled; returns {@code false} if an error occurs. |

**Example**

```TypeScript
let enable : boolean = bluetooth.enableBluetooth();

```

