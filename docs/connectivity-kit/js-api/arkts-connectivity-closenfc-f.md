# closeNfc

## Modules to Import

```TypeScript
import { nfcController } from '@ohos.nfc.controller';
```

## closeNfc

```TypeScript
function closeNfc(): boolean
```

Disables NFC.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** disableNfc

**Required permissions:** ohos.permission.MANAGE_SECURE_SETTINGS

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if NFC is disabled or has been disabled; returns {@code false} otherwise. |

