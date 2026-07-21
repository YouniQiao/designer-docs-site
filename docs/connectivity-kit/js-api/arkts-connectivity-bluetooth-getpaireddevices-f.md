# getPairedDevices

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="getpaireddevices"></a>
## getPairedDevices

```TypeScript
function getPairedDevices(): Array<string>
```

Obtains the list of Bluetooth devices that have been paired with the current device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPairedDevices

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function getPairedDevices(): Array<string>--><!--Device-bluetooth-function getPairedDevices(): Array<string>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Returns a list of paired Bluetooth devices's address. |

**Example**

```TypeScript
let devices : Array<string> = bluetooth.getPairedDevices();

```

