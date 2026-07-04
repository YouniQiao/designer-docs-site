---
last_update:
  date: 2026-07-04
---

# isSupported

## Modules to Import

```TypeScript
import { cardEmulation } from '@ohos.nfc.cardEmulation';
```

## isSupported

```TypeScript
function isSupported(feature: number): boolean
```

Checks whether a specified type of card emulation is supported. <p>This method is used to check Whether the host or secure element supports card emulation.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** hasHceCapability

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| feature | number | Yes | Indicates the card emulation type, { |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the specified type of card emulation is supported; returns false otherwise. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';

let isHceSupported: boolean = cardEmulation.isSupported(cardEmulation.FeatureType.HCE);
if (!isHceSupported) {
    console.info('this device is not supported for HCE, ignore it.');
}

```

```TypeScript
// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let isHceSupported = cardEmulation.isSupported(cardEmulation.FeatureType.HCE);
if (!isHceSupported) {
    console.error('this device is not supported for HCE, ignore it.');
}

```

