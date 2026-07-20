# getPairedDevices

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

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
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Returns a list of paired Bluetooth devices's address. |

**Example**

```TypeScript
let devices : Array<string> = bluetooth.getPairedDevices();

```

