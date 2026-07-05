# startBluetoothDiscovery

## startBluetoothDiscovery

```TypeScript
function startBluetoothDiscovery(): boolean
```

Starts scanning Bluetooth devices.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.startBluetoothDiscovery

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the scan is started successfully; returns {@code false} otherwise. |

**Example**

```TypeScript
let deviceId : Array<string>;
function onReceiveEvent(data : Array<string>) {
    deviceId = data;
}
bluetooth.on('bluetoothDeviceFind', onReceiveEvent);
let result : boolean = bluetooth.startBluetoothDiscovery();

```

