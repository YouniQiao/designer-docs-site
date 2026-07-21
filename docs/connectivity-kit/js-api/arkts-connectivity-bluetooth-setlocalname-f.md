# setLocalName

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="setlocalname"></a>
## setLocalName

```TypeScript
function setLocalName(name: string): boolean
```

Sets the Bluetooth friendly name of a device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setLocalName

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function setLocalName(name: string): boolean--><!--Device-bluetooth-function setLocalName(name: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates a valid Bluetooth name. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the Bluetooth name is set successfully; returns {@code false}otherwise. |

**Example**

```TypeScript
let ret : boolean = bluetooth.setLocalName('device_name');

```

