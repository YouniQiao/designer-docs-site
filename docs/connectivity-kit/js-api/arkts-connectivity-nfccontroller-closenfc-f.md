# closeNfc

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
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

<!--Device-nfcController-function closeNfc(): boolean--><!--Device-nfcController-function closeNfc(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if NFC is disabled or has been disabled; returns {@code false} otherwise. |

