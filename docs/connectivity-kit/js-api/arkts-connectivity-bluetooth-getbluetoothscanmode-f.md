# getBluetoothScanMode

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="getbluetoothscanmode"></a>
## getBluetoothScanMode

```TypeScript
function getBluetoothScanMode(): ScanMode
```

Obtains the Bluetooth scanning mode of a device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getBluetoothScanMode

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function getBluetoothScanMode(): ScanMode--><!--Device-bluetooth-function getBluetoothScanMode(): ScanMode-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ScanMode](arkts-connectivity-connection-scanmode-e.md) | Returns the Bluetooth scanning mode, {@link ScanMode}. |

**Example**

```TypeScript
let scanMode : bluetooth.ScanMode = bluetooth.getBluetoothScanMode();

```

