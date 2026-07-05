# createGattServer

## createGattServer

```TypeScript
function createGattServer(): GattServer
```

create a JavaScript Gatt server instance.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble#createGattServer

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| GattServer | Returns a JavaScript Gatt server instance {@code GattServer}. |

**Example**

```TypeScript
let gattServer: bluetoothManager.GattServer  = bluetoothManager.BLE.createGattServer();

```

