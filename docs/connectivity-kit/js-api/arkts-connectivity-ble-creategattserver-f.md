# createGattServer

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

<a id="creategattserver"></a>
## createGattServer

```TypeScript
function createGattServer(): GattServer
```

create a JavaScript Gatt server instance.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** createGattServer

<!--Device-BLE-function createGattServer(): GattServer--><!--Device-BLE-function createGattServer(): GattServer-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [GattServer](arkts-connectivity-bluetooth-gattserver-i.md) | Returns a JavaScript Gatt server instance {@code GattServer}. |

**Example**

```TypeScript
let gattServer: bluetoothManager.GattServer  = bluetoothManager.BLE.createGattServer();

```

