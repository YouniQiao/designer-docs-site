# createGattServer

## Modules to Import

```TypeScript
import { bluetoothManager } from '@ohos.bluetoothManager';
```

## createGattServer

```TypeScript
function createGattServer(): GattServer
```

create a JavaScript Gatt server instance.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** createGattServer

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| GattServer | Returns a JavaScript Gatt server instance {@code GattServer}. |

**Example**

```TypeScript
let gattServer: bluetoothManager.GattServer  = bluetoothManager.BLE.createGattServer();

```

