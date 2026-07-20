# getOpKeySync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getOpKeySync

```TypeScript
function getOpKeySync(slotId: number): string
```

Obtains the operator key of the SIM card in a specified slot.

**Since:** 10

<!--Device-sim-function getOpKeySync(slotId: int): string--><!--Device-sim-function getOpKeySync(slotId: int): string-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the operator key; returns an empty string if no SIM card is inserted or no operator key is matched. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let data: string = sim.getOpKeySync(0);
console.info(`getOpKey success, promise: data->${JSON.stringify(data)}`);

```

