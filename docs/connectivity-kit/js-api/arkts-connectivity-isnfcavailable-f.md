# isNfcAvailable

## Modules to Import

```TypeScript
import { nfcController } from '@ohos.nfc.controller';
```

## isNfcAvailable

```TypeScript
function isNfcAvailable(): boolean
```

Checks whether a device supports NFC.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** canIUse("SystemCapability.Communication.NFC.Core")

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports NFC; returns {@code false} otherwise. |

