# isNfcAvailable

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

<a id="isnfcavailable"></a>
## isNfcAvailable

```TypeScript
function isNfcAvailable(): boolean
```

Checks whether a device supports NFC.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** canIUse("SystemCapability.Communication.NFC.Core")

<!--Device-nfcController-function isNfcAvailable(): boolean--><!--Device-nfcController-function isNfcAvailable(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports NFC; returns {@code false} otherwise. |

