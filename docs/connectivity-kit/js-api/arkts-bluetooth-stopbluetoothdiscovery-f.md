# stopBluetoothDiscovery

## stopBluetoothDiscovery

```TypeScript
function stopBluetoothDiscovery(): boolean
```

Stops Bluetooth device scanning.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.stopBluetoothDiscovery

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if scanning is stopped successfully; returns {@code false} otherwise. |

**Example**

```TypeScript
let result : boolean = bluetooth.stopBluetoothDiscovery();

```

