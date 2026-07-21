# getSimStateSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

<a id="getsimstatesync"></a>
## getSimStateSync

```TypeScript
function getSimStateSync(slotId: number): SimState
```

Obtains the state of the SIM card in a specified slot.

**Since:** 10

<!--Device-sim-function getSimStateSync(slotId: int): SimState--><!--Device-sim-function getSimStateSync(slotId: int): SimState-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [SimState](arkts-telephony-sim-simstate-e.md) | Returns one of the following SIM card states:<ul><li>{@code SimState#SIM_STATE_UNKNOWN}<li>{@code SimState#SIM_STATE_NOT_PRESENT}<li>{@code SimState#SIM_STATE_LOCKED}<li>{@code SimState#SIM_STATE_NOT_READY}<li>{@code SimState#SIM_STATE_READY}<li>{@code SimState#SIM_STATE_LOADED}</ul> |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let simState: sim.SimState = sim.getSimStateSync(0);
console.info(`The sim state is:` + simState);

```

