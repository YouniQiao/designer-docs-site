# hasHceCapability

## Modules to Import

```TypeScript
import { cardEmulation } from '@ohos.nfc.cardEmulation';
```

## hasHceCapability

```TypeScript
function hasHceCapability(): boolean
```

Checks whether Host Card Emulation(HCE) capability is supported.

**Since:** 12

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if HCE is supported, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';

let hasHceCap: boolean = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}

```

```TypeScript
// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let hasHceCap = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}

```

