# stopBluetoothDiscovery

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="stopbluetoothdiscovery"></a>
## stopBluetoothDiscovery

```TypeScript
function stopBluetoothDiscovery(): boolean
```

Stops Bluetooth device scanning.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** stopBluetoothDiscovery

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function stopBluetoothDiscovery(): boolean--><!--Device-bluetooth-function stopBluetoothDiscovery(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if scanning is stopped successfully; returns {@code false} otherwise. |

**Example**

```TypeScript
let result : boolean = bluetooth.stopBluetoothDiscovery();

```

