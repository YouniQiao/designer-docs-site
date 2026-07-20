# enableBluetooth

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## enableBluetooth

```TypeScript
function enableBluetooth(): boolean
```

Enables Bluetooth on a device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** enableBluetooth

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function enableBluetooth(): boolean--><!--Device-bluetooth-function enableBluetooth(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if Bluetooth is being enabled; returns {@code false} if an error occurs. |

**Example**

```TypeScript
let enable : boolean = bluetooth.enableBluetooth();

```

