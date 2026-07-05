# hasHceCapability

## hasHceCapability

```TypeScript
function hasHceCapability(): boolean
```

Checks whether Host Card Emulation(HCE) capability is supported.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if HCE is supported, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';

let hasHceCap: boolean = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}


// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let hasHceCap = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}

```

