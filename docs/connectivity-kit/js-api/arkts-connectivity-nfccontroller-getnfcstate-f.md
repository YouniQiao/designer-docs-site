# getNfcState

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

<a id="getnfcstate"></a>
## getNfcState

```TypeScript
function getNfcState(): NfcState
```

Obtains the NFC status.<p>The NFC status can be any of the following: <ul><li>{@link #STATE_OFF}: Indicates that NFC is disabled. <li>{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled.<li>{@link #STATE_ON}: Indicates that NFC is enabled. <li>{@link #STATE_TURNING_OFF}: Indicates that NFC is being disabled.</ul>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-nfcController-function getNfcState(): NfcState--><!--Device-nfcController-function getNfcState(): NfcState-End-->

**System capability:** SystemCapability.Communication.NFC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [NfcState](arkts-connectivity-nfccontroller-nfcstate-e.md) | Returns the NFC status. |

