# cancelPairedDevice (System API)

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="cancelpaireddevice"></a>
## cancelPairedDevice

```TypeScript
function cancelPairedDevice(deviceId: string): boolean
```

Remove a paired remote device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** cancelPairedDevice

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function cancelPairedDevice(deviceId: string): boolean--><!--Device-bluetooth-function cancelPairedDevice(deviceId: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The address of the remote device to be removed. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the cancel process is started; returns {@code false} otherwise. |

**Example**

```TypeScript
let result : boolean = bluetooth.cancelPairedDevice("XX:XX:XX:XX:XX:XX");

```

