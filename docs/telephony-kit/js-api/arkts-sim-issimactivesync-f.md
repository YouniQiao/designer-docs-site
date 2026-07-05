# isSimActiveSync

## isSimActiveSync

```TypeScript
function isSimActiveSync(slotId: int): boolean
```

Checks whether the SIM card in a specified slot is activated.

**Since:** 10

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the SIM card is activated; returns {@code false} otherwise. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let isSimActive: boolean = sim.isSimActiveSync(0);
console.info(`the sim is active:` + isSimActive);

```

