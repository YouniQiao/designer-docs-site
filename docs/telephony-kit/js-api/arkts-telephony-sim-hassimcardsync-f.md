# hasSimCardSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

<a id="hassimcardsync"></a>
## hasSimCardSync

```TypeScript
function hasSimCardSync(slotId: number): boolean
```

Checks whether a SIM card is inserted in a specified slot.

**Since:** 10

<!--Device-sim-function hasSimCardSync(slotId: int): boolean--><!--Device-sim-function hasSimCardSync(slotId: int): boolean-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if a SIM card is inserted; return {@code false} otherwise. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let hasSimCard: boolean = sim.hasSimCardSync(0);
console.info(`has sim card: ` + hasSimCard);

```

