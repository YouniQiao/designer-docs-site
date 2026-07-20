# getCardTypeSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getCardTypeSync

```TypeScript
function getCardTypeSync(slotId: number): CardType
```

Obtains the type of the SIM card inserted in a specified slot.

**Since:** 10

<!--Device-sim-function getCardTypeSync(slotId: int): CardType--><!--Device-sim-function getCardTypeSync(slotId: int): CardType-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [CardType](../../apis-connectivity-kit/arkts-apis/arkts-connectivity-cardemulation-cardtype-e.md) | Returns the SIM card type. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let cardType: sim.CardType = sim.getCardTypeSync(0);
console.info(`the card type is:` + cardType);

```

