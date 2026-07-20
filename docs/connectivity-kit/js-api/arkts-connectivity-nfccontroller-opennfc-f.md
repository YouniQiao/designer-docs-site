# openNfc

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

## openNfc

```TypeScript
function openNfc(): boolean
```

Enables NFC.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** enableNfc

**Required permissions:** ohos.permission.MANAGE_SECURE_SETTINGS

<!--Device-nfcController-function openNfc(): boolean--><!--Device-nfcController-function openNfc(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if NFC is enabled or has been enabled; returns {@code false} otherwise. |

